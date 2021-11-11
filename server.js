const initialize = require('./app/controllers/initializer');
const logger = require('./app/utils/logger.js');
const app = require('./app');

const port = 4444;

initialize().then(() => {
  app.listen(port, () => {
    logger.info(`Node App listening at ${port}`);
  });
}).catch((err) => {
  logger.error(
    `Node App failed to listen at ${port} : err: ${err}`,
  );
});
