const Channel = require('./index');

const getChannels = (callback) => {
  Channel.find(callback);
  console.log('db getChannels===', callback);
};

module.exports = getChannels;
