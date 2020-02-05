const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  videoId: Number,
  userName: String,
  gameName: String,
  live: Boolean,
  title: String,
  viewerCount: Number,
  thumbnailUrl: String,
});

module.exports = channelSchema;
