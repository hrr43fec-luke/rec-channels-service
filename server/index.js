/* eslint-disable linebreak-style */
const express = require('express');
require('dotenv').config();
const router = require('./router');

const app = express();
const { PORT } = process.env;
app.use(router);
app.use(express.static('public'));

const log = (txt) => {
  // eslint-disable-next-line no-console
  console.log(new Date().toString(), txt);
};
app.listen(PORT, () => log(`
rec channels listening on port ${PORT}`));
