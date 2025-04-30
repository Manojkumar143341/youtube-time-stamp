// backend/models/Highlight.js
const mongoose = require('mongoose');

const HighlightSchema = new mongoose.Schema({
  timestamp: String,
  note: String,
  videoId: String,
});

module.exports = mongoose.model('Highlight', HighlightSchema);
