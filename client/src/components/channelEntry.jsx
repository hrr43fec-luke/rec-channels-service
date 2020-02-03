import React from 'react';
import AvatarPic from './AvatarPic.jsx';
import Username from './Username.jsx';
import GameName from './GameName.jsx';
import LiveIcon from './LiveIcon.jsx';
import ViewerCount from './ViewerCount.jsx';
import ToolTip from './ToolTip.jsx';

const ChannelEntry = ({ channel }) => (
  <div className="channelEntry">
      <AvatarPic avatar={channel.thumbnail_url} />
    <div className="user-game">
      <Username username={channel.user_name} />
      <GameName gamename={channel.game_name} />
    </div>
    <div className="live-count">
      <LiveIcon live={channel.live} />
      <ViewerCount views={channel.viewer_count} />
      <ToolTip tooltip={channel.title} />
    </div>
  </div>
);

export default ChannelEntry;
