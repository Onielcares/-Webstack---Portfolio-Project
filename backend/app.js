const express = require('express');

const app = express();

app.use(express.json());

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to easyfind app!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
