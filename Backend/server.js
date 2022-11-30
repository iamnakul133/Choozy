const express = require("express");
const mongoose = require("mongoose");
// const Router = require("./routes");
// import Post from "./databases/post.js";
// import User from "./databases/user.js";
const User = require("./databases/user.js");
const Posts = require("./databases/post.js");

const app = express();

app.use(express.json());

//mongodb connection
const mongoDB = "mongodb://127.0.0.1/choozy";

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

//routes
app.get("/posts", (req, res) => {
  Posts.find({}, (err, data) => {
    console.log(data);
    res.send(data);
  });
});

app.get("/user", (req, res) => {
  User.findOne({ username: "nakul" }, (err, data) => {
    console.log(data);
    res.send(data);
  });
});

app.listen(5000, () => {
  console.log("successful");
});
