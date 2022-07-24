const express = require("express");
//const dotenv = require("dotenv").config();
const connectDataBase = require("./config/database");
const port = 5000;
const app = express();
connectDataBase();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", require("./routes/userRoute"));
app.listen(port, (req, res) => {
  console.log(`server running on port ${port}`);
});
