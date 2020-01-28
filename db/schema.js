const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  id: Number,
  user_id: Number,
  user_name: String,
  game_name: String,
  live: Boolean,
  title: String,
  viewer_count: Number,
  thumbnail_url: String,
});

module.exports = channelSchema;
