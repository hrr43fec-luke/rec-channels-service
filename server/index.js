/* eslint-disable linebreak-style */
const express = require('express');
const router = require('./router');

const app = express();
const port = 3004;
app.use(router);
app.use(express.static('public'));

const log = (txt) => {
  // eslint-disable-next-line no-console
  console.log(new Date().toString(), txt);
};
app.listen(port, () => log(`
rec channels listening on port ${port}`));
