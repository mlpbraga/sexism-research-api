const { db, models } = require('../models');

const { sequelize } = db;
const logger = require('../utils/logger');
const { throwBadRequest } = require('../utils/errors/bad-request');

const { Votes } = models;

const VotesDao = {
  async add(reqParams) {
    let response;
    try {
      const voteId = await Votes.findAll({
        attributes: [sequelize.fn('MAX', sequelize.col('vote_id'))],
        group: ['deleted'],
        raw: true,
      });
      response = await Votes.create({
        voteId: voteId[0].max + 1,
        ...reqParams,
      });
    } catch (error) {
      logger.error(`VotesDao :: ${error}`);
      logger.debug(error);
      return throwBadRequest({
        code: 405,
        message: 'Could not create vote',
      });
    }
    return response;
  },
};

module.exports = VotesDao;
