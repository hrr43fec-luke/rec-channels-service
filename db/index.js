/* eslint-disable no-console */
const mongoose = require('mongoose');
const channelSchema = require('./schema.js');
require('dotenv').config();

mongoose
  .connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true, useNewUrlParser: true,
  });

const Channel = mongoose.model('Channel', channelSchema);

module.exports = Channel;
