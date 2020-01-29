import React from 'react';

const ChannelEntry = ({ channel }) => (
  <div className="channelEntry">
    <div>
      <img className="avatarPic" src={channel.thumbnail_url} alt="" />
    </div>
    <div className="user-game">
      <div className="username">
        {channel.user_name}
      </div>
      <div className="gamename">
        {channel.game_name}
      </div>
    </div>
    <div className="live-count">
      <div className="live">
        {channel.live ? '●' : 'offline'}
      </div>
      <div className="viewer-count">
        {channel.viewer_count}
      </div>
    </div>
  </div>
);

export default ChannelEntry;
