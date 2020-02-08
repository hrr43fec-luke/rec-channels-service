const Channel = require('./index');

const helper = {
  getVideoChannelsById: (videoId, callback) => {
    Channel.find({ videoId }, callback).sort({ viewerCount: -1 });
  }
};

module.exports = helper;
