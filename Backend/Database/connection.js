const mongoose = require('mongoose');

//function defined
async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/baroque', {
     
    });
    console.log("Connection succeeded");
  } catch (err) {
    console.error("Connection failed", err);
  }
}

connectToDatabase();  // function calling
