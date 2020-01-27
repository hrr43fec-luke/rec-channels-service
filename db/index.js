var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/channels', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', ()=> {
  console.log.bind(console, 'db connected!')
});

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