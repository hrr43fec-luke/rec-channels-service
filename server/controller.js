/* eslint-disable no-console */
const db = require('../db/dbHelpers');

const controller = {
  get: (req, res) => {
    db.getChannels((err, channels) => {
      if (err) {
        console.err('server ctrl get channel error', err);
      }
      res.status(200);
      res.json(channels);
    });
  },
};

module.exports = controller;
