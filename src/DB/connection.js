// connection.js (database connection)
const mongoose = require('mongoose');

// Establish the database connection
async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/trackdots', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1); 
  }
}

// Export the connectToDatabase function
module.exports = connectToDatabase;
