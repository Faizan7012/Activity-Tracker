require("dotenv").config();
const express = require("express");
const UserRoute = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const userModel = require("./user.model");
UserRoute.use(cors());
UserRoute.get("/", async (req, res) => {
  res.send("welcome to UserRoute");
});

// SIGNUP
// Post Request
UserRoute.post("/signup", async (req, res) => {
  const email_users = await userModel.find({
    email: req.body.email,
  });
  if (email_users.length >= 1) {
    res.status(404).json({
      message: "EmailID already exists",
      status: false,
    });
  } else {
    try {
      const hash = await argon2.hash(req.body.password);
      const new_user = new userModel({
        username: req.body.username,
        password: hash,
        email: req.body.email,
      });
      const created_users = await new_user.save();

      res.status(201).json({
        msg: "Signup Successfull",
        status: true,
      });
    } catch (error) {
      res.status(404).json({
        msg: error.message,
        status: false,
      });
    }
  }
});
// LOGIN
//Post Request
UserRoute.post("/login", async (req, res) => {
  try {
    const user = await userModel.find({ email: req.body.email });
    if (user.length >= 1) {
      if (await argon2.verify(user[0].password, req.body.password)) {
        const token = jwt.sign(
          {
            id: user[0]._id,
            username: user[0].username,
            email: user[0].email,
          },
          'TOP_SECRET',
          {
            expiresIn: "7d",
          }
        );
        res.status(200).json({
          token: token,
          username: user[0].username,
          email: user[0].email,
          status: true,
        });
      } else {
        res.status(403).json({
          message: "YOUR PASSWORD IS INCORRECT",
          status: false,
        });
      }
    } else {
      res.status(404).json({
        message: "NO USER NOT FOUND",
        status: false,
      });
    }
  } catch (error) {
    res.status(404).json({
      error: "EMAIL OR PASSWORD IS INCORRECT",
      status: false,
    });
  }
});
module.exports = UserRoute;
