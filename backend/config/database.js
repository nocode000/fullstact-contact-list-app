const mongoose = require("mongoose");
const url =
  "mongodb+srv://pavan123:pavan123@cluster0.5rz5w.mongodb.net/?retryWrites=true&w=majority";
const connectDataBase = async () => {
  try {
    const conn = await mongoose.connect(url);
    console.log(`mongoDB connected ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDataBase;
