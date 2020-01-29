import React from 'react';
import PropTypes from 'prop-types';
import ChannelEntry from './ChannelEntry.jsx';

const ChannelList = ({ channels }) => (
  <div className="channelList">
    <h2>
      RECOMMENDED CHANNELS
    </h2>
    {channels.map((channel) => (
      <ChannelEntry
        key={channel._id}
        channel={channel}
      />
    ))}
  </div>
);


ChannelList.propTypes = {
  channels: PropTypes.shape({
    user_id: PropTypes.number.isRequired,
    user_name: PropTypes.string.isRequired,
    game_name: PropTypes.string.isRequired,
    live: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    viewer_count: PropTypes.number.isRequired,
    thumbnail_url: PropTypes.string.isRequired,
  }).isRequired,
}

export default ChannelList;
