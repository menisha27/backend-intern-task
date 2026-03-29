const Task = require('../models/Task');

// Create a new task
exports.create = async (req, res) => {
  try {
    const task = await Task.create({ 
      ...req.body, 
      owner: req.user.id 
    });
    res.status(201).json({ message: 'Task created successfully!', task });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all tasks
exports.getAll = async (req, res) => {
  try {
    // Admin can see all tasks, user can only see their own
    const tasks = req.user.role === 'admin'
      ? await Task.find().populate('owner', 'name email')
      : await Task.find({ owner: req.user.id });

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a task
exports.update = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ error: 'Task not found.' });
    res.json({ message: 'Task updated successfully!', task });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a task (admin only)
exports.delete = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};