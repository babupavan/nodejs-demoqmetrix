const express = require('express');
const router = express.Router();

// Handle GET request for the root route
router.get('/', (req, res) => {
  res.send('Hello, World!');
});

module.exports = router;

