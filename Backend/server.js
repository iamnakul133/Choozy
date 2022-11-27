const express = require("express");
const mongoose = require("mongoose");
// const Router = require("./routes");
// import Post from "./databases/post.js";
// import User from "./databases/user.js";
const User = require("./databases/user.js");
const Posts = require("./databases/post.js");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://nakul:nakul@cluster0.xlejzoh.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
  const Users = db.collection("Users");
  const Posts = db.collection("Posts");
});
