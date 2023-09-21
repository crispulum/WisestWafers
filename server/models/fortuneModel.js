const mongoose = require('mongoose');

// The document schema should have 3 things
// A "firstName" that is a string
// A "lastName" that is a string
// An "age" that is a number
// All of these should be required.
// Create your schema here
const fortuneSchema = new mongoose.Schema({
    
 
  fortuneText: {
    type: String,
    required: true, 
  }
});

const fortune = mongoose.model('fortune', fortuneSchema);

// You must export your model through module.exports
// The collection name should be 'student'
module.exports = fortune;
