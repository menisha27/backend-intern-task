const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: '🚀 Server is running!' });
});

// API Routes
app.use('/api/v1/auth',  require('./routes/auth.routes'));
app.use('/api/v1/tasks', require('./routes/task.routes'));

module.exports = app;