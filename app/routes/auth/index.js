const { celebrate } = require('celebrate');
const { Router } = require('express');
const validationSchema = require('./validation');
const authController = require('../../controllers/auth');

const router = new Router({ mergeParams: true });

const joiOptions = {
  allowUnknown: false,
};

const validateMiddleware = (req, res, next) => {
  celebrate(validationSchema, joiOptions)(req, res, next);
};

router.post(
  '/',
  validateMiddleware,
  authController.handle,
);

module.exports = router;
