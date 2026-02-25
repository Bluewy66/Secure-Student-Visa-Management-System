const express = require('express');
const cors = require('cors');
const app = express();

// Middleware to handle JSON requests
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Admin Dashboard');
});

// Set up the server to listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});