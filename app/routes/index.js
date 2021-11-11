const usersRoute = require('./users');
const authRoute = require('./auth');
const commentsRoute = require('./comments');
const votesRoute = require('./votes');
const newsRoute = require('./news');

const routes = {
  usersRoute,
  authRoute,
  commentsRoute,
  votesRoute,
  newsRoute,
};

module.exports = routes;
