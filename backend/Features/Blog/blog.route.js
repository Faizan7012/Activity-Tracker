const express = require("express");
const app = express.Router();
const Blog = require("./blog.model.js");
const transporter = require("./mail.js");
app.get("/", async (req, res) => {
  const { page, limit, category } = req.query;
  console.log(page, limit, category);
  let data = await Blog.find()
    .limit(limit)
    .skip((page - 1) * limit);

  if (category) {
    data = await Blog.find({ category: category })
      .limit(limit)
      .skip((page - 1) * limit);
  }

  res.send(data);
});

app.post("/sendmail", async (req, res) => {
  const { email, name, message } = req.body;

  transporter.sendMail(
    {
      to: "faizanst077@gmail.com",
      from: email,
      subject: "Signup Success",
      html: `<h1>${name}</h1>
         <p>${message}</p>`,
    },
    (err) => {
      if (err) {
        res.send({ status: false, message: err.message });
      } else {
        res.send({ status: true, message: "mail sended successfully !" });
      }
    }
  );
});

module.exports = app;
