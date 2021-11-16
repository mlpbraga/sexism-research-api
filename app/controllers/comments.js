const logger = require('../utils/logger');
const CommentsDAO = require('../dao/comment-dao');
const commentsResponseFormatter = require('../formatters/response/comments');

module.exports = {
  async handleGetRandom(req, res, next) {
    let response;
    try {
      response = await CommentsDAO.randomOne(req.user);
      return res.status(200).json(response);
    } catch (error) {
      logger.error(`Comments Controller::handleGetRandom ${error}`);
      logger.debug(error);
      return next(error);
    }
  },
  async handleGet(req, res, next) {
    try {
      const response = await CommentsDAO.read(req.query);
      const formattedResponse = commentsResponseFormatter(response);

      return res.status(200).json(formattedResponse);
    } catch (error) {
      logger.error(`Comments Controller::handleGet ${error}`);
      logger.debug(error);
      return next(error);
    }
  },
};
