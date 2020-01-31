/* eslint-disable no-undef */
const mongoose = require('mongoose');
// let db = require('../db/index');
require('dotenv').config();

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await mongoose.connect('mongodb://localhost/test', {
      useUnifiedTopology: true, useNewUrlParser: true,
    });
    db = await mongoose.connection;
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert a doc into collection', async () => {
    const users = db.collection('users');

    const mockUser = { _id: 'some-user-id', name: 'John' };
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({ _id: 'some-user-id' });
    expect(insertedUser).toEqual(mockUser);
    await db.dropDatabase();
  });
});
