const mongoose = require("mongoose");

const Post = mongoose.model(
  "Post",
  new mongoose.Schema({
    title: String,
    author: String,
    date: Date,
    text: String,
  })
);

module.exports = Post;