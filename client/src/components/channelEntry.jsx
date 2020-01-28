import React from 'react';

const ChannelEntry = ({ channel }) => (
  <div className="channelEntry">
    <div className="avatar">
      <img src={channel.thumbnail_url} alt="" />
    </div>
    <div className="username">
      <span>{channel.user_name}</span>
      <span>{channel.game_name}</span>
    </div>
    <div className="viewers">
      <span>{channel.live ? 'live' : 'offline'}</span>
      <span>{channel.viewer_count}</span>
    </div>
  </div>
);

export default ChannelEntry;
