/* eslint-disable no-unused-expressions */
//  TODO ===> THIS IS A SEED FILE. IT SHOULD ONLY BE RUN ONCE TO SEED DATA INTO THE MONGO DATABASE.
//  TODO ===> IT SHOULD NOT BE RUN AGAIN AFTER.
const faker = require('faker');
const Channel = require('./');

const createChannel = () => {
  const channel = {};
  channel.user_id = faker.random.number();
  channel.user_name = faker.internet.userName();
  channel.game_name = faker.company.catchPhraseNoun();
  channel.live = faker.random.boolean();
  channel.title = faker.random.words();
  channel.viewer_count = faker.random.number();
  channel.thumbnail_url = faker.internet.avatar();
  return channel;
};

const createChannels = () => {
  const channels = [];
  for (let i = 0; i < 100; i += 1) {
    channels.push(createChannel());
  }
  return channels;
};

const insertIntoDB = () => {
  const createdChannels = createChannels();
  Channel.collection.insertMany(createdChannels);
};

insertIntoDB();
