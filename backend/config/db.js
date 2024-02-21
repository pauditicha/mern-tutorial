const mongoose = require('mongoose');

const connDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MONGO DB CONNECTED: ${conn.connection.host}`.underline.cyan);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connDB;
