const { QueryTypes } = require('sequelize');
const { models } = require('../models');
const { db } = require('../models');

const { Op } = db.Sequelize;
const {
  Comments, News, Votes, Results,
} = models;

const pickRandom = (commentList, voteCount) => commentList
  .filter((item) => parseInt(item.count, 10) < voteCount)
  .sort(() => Math.random() - 0.5);

const CommentDao = {
  async one(reqParams) {
    const { email } = reqParams;
    const commentIds = await db.sequelize.query(`
      select comment_id, count(vote) as count
      from votes where user_id <> '${email}'
      group by (comment_id);
    `, { type: QueryTypes.SELECT });
    let chosenComment = pickRandom(commentIds, 1);
    if (chosenComment.length > 0) {
      const chosen = await Comments.findAll({
        where: { commentId: chosenComment[0].comment_id },
        include: [{ model: News, required: true }],
      });
      return chosen[0];
    }

    chosenComment = pickRandom(commentIds, 2);
    if (chosenComment.length > 0) {
      const chosen = await Comments.findAll({
        where: { commentId: chosenComment[0].comment_id },
        include: [{ model: News, required: true }],
      });
      return chosen[0];
    }

    chosenComment = pickRandom(commentIds, 3);
    if (chosenComment.length > 0) {
      const chosen = await Comments.findAll({
        where: { commentId: chosenComment[0].comment_id },
        include: [{ model: News, required: true }],
      });
      return chosen[0];
    }

    chosenComment = pickRandom(commentIds, 4);
    if (chosenComment.length > 0) {
      const chosen = await Comments.findAll({
        where: { commentId: chosenComment[0].comment_id },
        include: [{ model: News, required: true }],
      });
      return chosen[0];
    }

    chosenComment = pickRandom(commentIds, 10);
    const chosen = await Comments.findAll({
      where: { commentId: chosenComment[0].comment_id },
      include: [{ model: News, required: true }],
    });
    return chosen[0];
  },
  async read(reqParams) {
    const {
      id,
      newsid,
      limit,
      offset,
      query,
      label,
    } = reqParams;

    const where = {};
    const labelWhere = {};

    if (id) where.commentId = id;
    if (newsid) where.newsId = newsid;
    if (query) {
      where.content = { [Op.like]: `%${query}%` };
    }
    if (label) {
      if (label === 'sexist') labelWhere.avg = { [Op.gt]: 0.5 };
      else if (label === 'not-sexist') labelWhere.avg = { [Op.lt]: 0.5 };
      else if (label === 'undefined') labelWhere.avg = 0.5;
    }

    const response = await Comments.findAll({
      where,
      include: [
        { model: Votes },
        { model: News },
        {
          model: Results,
          required: true,
          where: labelWhere,
        },
      ],
      limit,
      offset,
    });
    return response;
  },
};

module.exports = CommentDao;
