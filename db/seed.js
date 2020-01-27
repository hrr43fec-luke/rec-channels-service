//TODO ======> THIS IS A SEED FILE. IT SHOULD ONLY BE RUN ONCE TO SEED DATA INTO THE MONGO DATABASE. IT SHOULD NOT BE RUN AGAIN AFTER.

const Channel = require('./');
var mongoose = require('mongoose');
var faker = require('faker');

createChannel = () => {
  let channel = {};
  channel.user_id = faker.random.number(),
  channel.user_name = faker.internet.userName(),
  channel.game_id = faker.random.number(),
  channel.live = faker.random.boolean(),
  channel.title = faker.random.words(),
  channel.viewer_count = faker.random.number(),
  channel.thumbnail_url = faker.internet.avatar()
  return channel;
}

createChannels = () => {
  var channels = [];
  for (var i = 0; i < 100; i++) {
    channels.push(createChannel());
  }
  return channels;
}

insertIntoDB = () => {
  var createdChannels = createChannels();
  Channel.collection.insertMany(createdChannels);
}

insertIntoDB();