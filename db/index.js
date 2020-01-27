var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/channels', {useNewUrlParser: true});
var channelSchema = require('./schema.js');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', ()=> {
  console.log.bind(console, 'db connected!')
});

var Channel = mongoose.model('Channel', channelSchema);

module.exports = Channel;