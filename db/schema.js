var mongoose = require('mongoose');

var channelSchema = new mongoose.Schema({
  "id": Number,
  "user_id": Number,
  "user_name": String,
  "game_id": Number,
  "live": Boolean,
  "title": String,
  "viewer_count": Number,
  "thumbnail_url": String
});

module.exports = channelSchema;