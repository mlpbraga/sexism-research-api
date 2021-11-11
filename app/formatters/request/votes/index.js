const BaseRequestFormatter = require('../base');

const VotesRequestFormatter = {
  format(reqParams) {
    const formattedParams = BaseRequestFormatter.format(reqParams);
    formattedParams.commentId = reqParams.body.commentid;
    if (reqParams.body.votevalue === 's') {
      formattedParams.vote = 1;
    } else if (reqParams.body.votevalue === 'n') {
      formattedParams.vote = 0;
    } else if (reqParams.body.votevalue === 'ns') {
      formattedParams.vote = -1;
    }
    formattedParams.userId = reqParams.user.email;
    formattedParams.deleted = false;
    return formattedParams;
  },
};

module.exports = VotesRequestFormatter;
