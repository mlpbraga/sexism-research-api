const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./app/middlewares/error-handler');
const { applyMiddlewares } = require('./app/middlewares');

const {
  usersRoute,
  authRoute,
  commentsRoute,
  votesRoute,
  newsRoute,
} = require('./app/routes');

const app = express();

applyMiddlewares(app);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// api routes
app.use('/users', usersRoute);
app.use('/auth', authRoute);
app.use('/comments', commentsRoute);
app.use('/votes', votesRoute);
app.use('/news', newsRoute);
app.use('/health', (req, res) => (res.status(200).json({ ok: 'working' })));

app.use(errorHandler);

module.exports = app;
