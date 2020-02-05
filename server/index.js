/* eslint-disable linebreak-style */
const express = require('express');
require('dotenv').config();
// const router = require('./router');
const db = require('../db/dbHelpers');


const app = express();
const { PORT } = process.env;
// app.use(router);
app.use(express.static('public'));
app.use(express.json());


app.get('/api/channels/:videoId', (req, res) => {
  console.log('app req.body', req.params.videoId);
  const videoId = req.params.videoId;
  db.getVideoChannelsById(videoId, (err, channels) => {
    if (err) {
      console.err('server ctrl get channel error', err);
    }
    res.status(200);
    res.json(channels);
  });
});

const log = (txt) => {
  // eslint-disable-next-line no-console
  console.log(new Date().toString(), txt);
};

app.listen(PORT, () => log(`
rec channels listening on port ${PORT}`));
