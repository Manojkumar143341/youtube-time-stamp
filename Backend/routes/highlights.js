// backend/routes/highlights.js
const express = require('express');
const router = express.Router();
const Highlight = require('../models/Highlight');  // Correct import

// Your route logic here
router.post('/add', async (req, res) => {
  try {
    const { timestamp, note, videoId } = req.body;
    const newHighlight = new Highlight({ timestamp, note, videoId });
    await newHighlight.save();
    res.status(201).json(newHighlight);
  } catch (error) {
    res.status(500).json({ message: 'Error saving highlight', error });
  }
});

module.exports = router;
