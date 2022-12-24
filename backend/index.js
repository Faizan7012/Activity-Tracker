const connect = require("./Config/connect.js");
const express = require("express");
const cors = require("cors");
const ProjectRoute = require("./Features/Project/project.route.js");
const BlogRoute = require("./Features/Blog/blog.route.js");
const UserRoute = require("./Features/User/user.route.js");
const TimerRoute = require("./Features/Timer/timer.route.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/project", ProjectRoute);
app.use("/user", UserRoute);
app.use("/blog", BlogRoute);
app.use("/timer", TimerRoute);



app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.listen(8001, async () => {
  try {
    await connect();
    console.log("data connected");
  } catch (err) {
    console.log(err.message, "not connected");
  }

  console.log(`listening on http://localhost:8001`);
});
