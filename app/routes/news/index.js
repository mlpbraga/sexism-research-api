const { Router } = require('express');

const newsController = require('../../controllers/news');

const router = new Router({ mergeParams: true });

router.get(
  '/',
  newsController.handleGet,
);

router.get(
  '/:id',
  newsController.handleGetOne,
);

module.exports = router;
