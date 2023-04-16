const { connect, mongo } = require("mongoose");

const connectDB = async () => {
  try {
    await connect(process.env.MONGODB_URI);
    console.log('Mongo connected');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };
