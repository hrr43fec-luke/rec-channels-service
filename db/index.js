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

var Channel = mongoose.model('Channel', channelSchema);

var emongg = new Channel({
  "id": 12345,
  "user_id": 54321,
  "user_name": 'Emongg',
  "game_id": 55555,
  "live": true,
  "title": 'Road to GM',
  "viewer_count": 9999,
  "thumbnail_url": 'https://s3.amazonaws.com/uifaces/faces/twitter/iamjdeleon/128.jpg'
})