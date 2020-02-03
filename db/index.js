/* eslint-disable no-console */
const mongoose = require('mongoose');
const channelSchema = require('./schema.js');
require('dotenv').config();

mongoose
  .connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true, useNewUrlParser: true,
  });

const Channel = mongoose.model('Channel', channelSchema);

module.exports = Channel;

// const connectionString = process.env.MONGODB_URI;

// run().then(() => console.log('done')).catch(error => console.error(error.stack));
// db.on('error', console.error.bind(console, 'db connection error:'));

// async function run() {
//   dbName: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   // password: process.env.DB_PASSWORD,
// });
// pL@VYWqJr7z@BRE
