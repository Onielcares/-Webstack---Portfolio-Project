const express = require('express');

const app = express();

app.use(express.json());

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to easyfind app!');
});

module.exports = app;
