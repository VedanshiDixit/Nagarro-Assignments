require('dotenv').config();
const harperive = require('harperive');

const DB_CONFIG = {
  harperHost: process.env.DB_URL,
  username: process.env.DB_Username,
  password: process.env.DB_Pass,
  schema: process.env.DB_Schema
};

const Client = harperive.Client;
const db = new Client(DB_CONFIG);

module.exports = db;