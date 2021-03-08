const express = require("express");
// import mongoose from "mongoose";
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

require("./services/slack");
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

app.use("/", routes);
// mongoose.Promise = global.Promise;

// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log("mongodb server started.");
//   })
//   .catch(() => {
//     console.log("Mongodb connection failed.");
//   });
