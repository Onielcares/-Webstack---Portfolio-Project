const express = require('express');

const app = express();

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to easyfind app!');
});

// Define a route for a specific user
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`You are viewing user ${userId}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
