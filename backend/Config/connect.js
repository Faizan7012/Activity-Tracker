const mongoose = require("mongoose");

const connect = async () => {
  return mongoose.connect(
    "mongodb+srv://nilesh:nilesh@cluster0.hnixegw.mongodb.net/at?retryWrites=true&w=majority"
  );
};

module.exports = connect;
