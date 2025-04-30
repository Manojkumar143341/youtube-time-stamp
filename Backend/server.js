const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const viewRoutes = require('./routes/views');
app.use('/api/views', viewRoutes);

app.use(cors()); // Allow all origins for now
app.use(express.json());

// Example highlights route
let highlights = [];

app.post('/api/highlights/add', (req, res) => {
  const { timestamp, note, videoId } = req.body;
  const newHighlight = { timestamp, note, videoId, views: 0 }; // Add views field
  highlights.push(newHighlight);
  res.json(newHighlight);
});

app.get('/api/highlights', (req, res) => {
  res.json(highlights);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
