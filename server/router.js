const router = require('express').Router();
const controller = require('./controller');

router
  .route('/channels')
  .get(controller.get);

module.exports = router;
