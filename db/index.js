/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/channels', { useNewUrlParser: true });
const channelSchema = require('./schema.js');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', () => {
  console.log.bind(console, 'db connected!');
});

const Channel = mongoose.model('Channel', channelSchema);

module.exports = Channel;
