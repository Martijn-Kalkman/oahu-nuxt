// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/pearlharbor', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema and model
const PageSchema = new mongoose.Schema({
  backgroundImage: String,
  heading: String,
  subheading: String,
  description: String,
});

const Page = mongoose.model('Page', PageSchema);

// API endpoint to get page data
app.get('/api/page', async (req, res) => {
  try {
    const pageData = await Page.findOne(); // Assumes a single document
    res.json(pageData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
