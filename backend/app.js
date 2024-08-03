const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const exampleRoutes = require('./routes/exampleRoutes');
const experimentRoutes = require('./routes/experimentRoutes');
const participantRoutes = require('./routes/participantRoutes');

app.use('/api/example', exampleRoutes);
app.use('/api/experiments', experimentRoutes);
app.use('/api/participants', participantRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/visual_cognition', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log('MongoDB connection error:', err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
