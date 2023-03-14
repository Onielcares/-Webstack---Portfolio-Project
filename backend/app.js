/* eslint-disable node/no-unsupported-features/es-syntax */
const express = require('express');
const categoryRouter = require('./routes/categoryRoute');

const app = express();

app.use(express.json());

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to easyfind app!');
});

app.use('api/v1/category', categoryRouter);

module.exports = app;
