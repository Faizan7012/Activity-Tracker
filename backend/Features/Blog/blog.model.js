const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  id: Number,
  title: String,
  img: String,
  desc: String,
  authImg: String,
  author: String,
  date: String,
  category: String,
});

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;
