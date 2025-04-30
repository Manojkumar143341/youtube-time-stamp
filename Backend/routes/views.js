// backend/routes/views.js
const express = require('express');
const router = express.Router();

const viewsMap = {}; // Simple in-memory map: key = videoId-timestamp, value = views count

// Track views at timestamps
router.post('/', (req, res) => {
  const { videoId, timestamp } = req.body;
  const key = `${videoId}-${timestamp}`;

  viewsMap[key] = (viewsMap[key] || 0) + 1;
  res.json({ message: 'View recorded', views: viewsMap[key] });
});

// Get most viewed timestamp for a video
router.get('/most-viewed/:videoId', (req, res) => {
  const { videoId } = req.params;
  const entries = Object.entries(viewsMap).filter(([key]) => key.startsWith(`${videoId}-`));
  
  if (entries.length === 0) return res.status(404).json({ message: 'No view data' });

  const mostViewed = entries.reduce((a, b) => (a[1] > b[1] ? a : b));
  const [key, views] = mostViewed;
  const timestamp = key.split('-')[1];

  res.json({ timestamp, views });
});

module.exports = router;
