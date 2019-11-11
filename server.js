require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
// const router = express.Router(); // Setup express router

const environment = process.env.NODE_ENV; // development
const stage = require('./config')[environment];

if (environment !== 'production') {
  app.use(logger('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/api/v1', (req, res) => {
  res.json(
    {
      status: 'success',
      message: 'Welcome to Teamwork API Test',
    },
  );
});

app.listen(`${stage.port}`, () => {
  console.log(`Server now listening at localhost:${stage.port}`);
});

module.exports = app;
