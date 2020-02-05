import React from 'react';
import AvatarPic from './AvatarPic.jsx';
import Username from './Username.jsx';
import GameName from './GameName.jsx';
import LiveIcon from './LiveIcon.jsx';
import ViewerCount from './ViewerCount.jsx';
import ToolTip from './ToolTip.jsx';

const ChannelEntry = ({ channel }) => (
  <div className="channelEntry">
      <AvatarPic avatar={channel.thumbnailUrl} />
    <div className="user-game">
      <Username username={channel.userName} />
      <GameName gamename={channel.gameName} />
    </div>
    <div className="live-count">
      <LiveIcon live={channel.live} />
      <ViewerCount views={channel.viewerCount} />
      <ToolTip tooltip={channel.title} />
    </div>
  </div>
);

export default ChannelEntry;
