const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

module.exports = { dbConnection };

