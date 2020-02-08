import React from 'react';
import PropTypes from 'prop-types';
import ChannelEntry from './ChannelEntry.jsx';

const ChannelList = ({ channels }) => (
  <div className="list-entry">
    <h4>
      RECOMMENDED CHANNELS
    </h4>
    {channels.map((channel) => (
      <ChannelEntry
        key={channel._id}
        channel={channel}
      />
    ))}
  </div>
);

export default ChannelList;
