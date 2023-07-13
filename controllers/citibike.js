const express = require("express");
const citibike = express.Router();

citibike.get('/', async (req, res) => {
  try {
    res.json({});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message});
  }
});

module.exports = citibike;