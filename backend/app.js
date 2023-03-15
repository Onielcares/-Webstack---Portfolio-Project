const express = require('express');
const categoryRouter = require('./routes/categoryRoute');
const populateCategory = require('./controllers/populateCategory');

const app = express();

app.use(express.json());

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to easyfind app!');
});

app.use('/api/v1/categories', categoryRouter);

module.exports = app;
