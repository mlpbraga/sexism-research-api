const _ = require('lodash');

const commentsResponseFormatter = (response) => response.map(
  (comment) => _.omit({
    ...comment.dataValues,
    label: comment.Result.avg,
    votes: {
      sexist: comment.Votes.filter((vote) => vote.vote === 1).length,
      notSexist: comment.Votes.filter((vote) => vote.vote === 0).length,
      total: comment.Result.votes,
    },
    news: comment.News,
  }, ['Votes', 'news_id', 'News', 'Result']),
);

module.exports = commentsResponseFormatter;
