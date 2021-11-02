const express = require("express");

const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const dotenv = require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

// mongoose.connect('mongodb://localhost:27017/foodDB', { useNewUrlParser: true  , useUnifiedTopology: true });
mongoose.connect("mongodb://localhost:27017/Farming", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// app.use(express.urlencoded({ extended: true }));
// app.use(bodyparser.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/images", express.static("images"));

const registerRoute = require("./routes/register");

app.use("/Register", registerRoute);

app.use((req, res, next) => {
  console.log(req);
  res.status(404).json({
    message: "no such route found",
    route: `${req.headers.host}${req.url}`,
  });
});

module.exports = app;
