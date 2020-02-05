import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';
import ChannelService from './components/ChannelService.jsx';

let id = window.location.search.slice(1);
let videoId = id ? id : 1;
console.log('id, video id', id, videoId)


ReactDOM.render(<ChannelService videoId={videoId}/>, document.getElementById('channel-service'));
