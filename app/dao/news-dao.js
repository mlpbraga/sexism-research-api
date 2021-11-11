const { db, models } = require('../models');
const { Op } = db.Sequelize;
const { News } = models;

const NewsDao = {
  async read(reqParams) {
    const {
      id,
      newsId,
      limit,
      offset,
    } = reqParams;

    const where = {};

    if (id) where.newsId = newsId;

    const response = await News.findAll({
      where,
      limit,
      offset,
    });
    return response;
  },
  async readOne(reqParams) {
    const { id } = reqParams;

    const response = await News.findOne({
      where: { newsId: id },
    });
    return response;
  },
};

module.exports = NewsDao;
