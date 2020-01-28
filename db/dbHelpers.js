const Channel = require('./index');

const helper = {
  getChannels: (callback) => {
    Channel.find({ live: { $eq: true } }, callback).sort({ viewer_count: -1 }).limit(10);
    console.log('db getChannels cb===', callback);
  }
};

module.exports = helper;
