/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ChannelList from './ChannelList.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.channels = [];
    console.log('state:', this.state.channels);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('/channels')
      .then((response) => response.json()
        .then((body) => {
          console.log('body', body);
          this.setState({ channels: body });
        }));
  }

  render() {
    const { channels } = this.state;
    console.log('channels:', channels);
    return (
      <div className="channelList">
        <ChannelList channels={this.state.channels} />
      </div>
    );
  }
}
