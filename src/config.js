require('dotenv').config();
const dbuser = process.env.DB_USER;
const dbpassword = process.env.DB_PASSWORD;
const dbURL = process.env.DB_URL;

module.exports = {
  dbuser,
  dbpassword,
  dbURL
};