const router = require('express').Router();
const controller = require('./controller');

router
  .router('/api/channels')
  .get(controller.get);

module.exports = router;
