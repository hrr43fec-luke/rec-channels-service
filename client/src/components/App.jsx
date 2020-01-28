/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ChannelList from './ChannelList.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.channels = [];
    console.log('state:', this.state.channels)
  }

  componentDidMount() {
    fetch('/channels')
      .then((response) => {
        return response.json()
          .then((body) => {
            console.log('body', body)
            this.setState({ channels: body });
          });
      });
  }

  render() {
    const { channels } = this.state.channels;
    console.log('channels:', channels)
    return (
      <div className="helloWorld">
        <h1>
          `Hello World! It's me, the Recommended Channels Module`
          <ChannelList channels={this.state.channels}/>
        </h1>
      </div>
    );
  }
}
