const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      family: 4
    });
    console.log('✅ Database connected successfully!');
  } catch (error) {
    console.log('❌ Database error:', error.message);
    process.exit(1);
  }
}

module.exports = connectDB;