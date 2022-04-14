const express = require('express');
const api = express.Router();

api.use((req, res) => {
  console.log('Received New Request');

  res.json({
    success: true,
    message: 'Congratulations! You have reached the endpoint!',
  });
});

module.exports = api;
