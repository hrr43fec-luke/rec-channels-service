/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ChannelList from './ChannelList.jsx';

export default class ChannelService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.channels = [];
    this.state.videoId = props.videoId;
  }

  componentDidMount() {
    this.fetchData();
  }


  fetchData() {
    const videoId = this.state.videoId;
    return fetch(`/api/channels/${videoId}`)
    .then((response) => response.json())
    .then((body) => {
      this.setState({ channels: body });
      return body;
    });
  }

  render() {
    const { channels } = this.state;
    return (
      <div className="channelList">
        <ChannelList channels={this.state.channels} />
      </div>
    );
  }
}
