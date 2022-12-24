const express = require("express");
const authMiddle = require("../../middlewares/auth.middleware.js");
const app = express.Router();
app.use(authMiddle)
const Project = require("./project.model.js");
app.get("/", async (req, res) => {
  const {userID} = req.body;
    try{
      const data = await Project.find({userID});
      res.send({
        status:true,
        data
      });
    }
    catch(e){
      res.send({
        status:false,
        message:e.message
      })
    }
});

app.get("/:id", async (req, res) => {
  try{
    const id = req.params.id;
    const data = await Project.findOne({ _id: id });
    res.send({
      status:true,
      data:data
    });
  }
  catch(e){
    req.send({
      status:false,
      message : e.message
    })
  }
});

//post
app.post("/", async (req, res) => {
  const { projectName, projectDate , userID } = req.body;
  try {
    const p = await Project.find({ projectName });
    if (p.length == 0) {
      const data = await Project.create({ projectName, projectDate , userID });
      const updated = await Project.find({userID});
      res.status(200).send({
          status:true,
          data : updated
      });
    } else {
      res.status(404).send({status:false, message: "project already exists" });
    }
  } catch (err) {
    res.status(401).send({status:false, message: e.message});
  }
});
//delete
app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const {userID} = req.body;
  const data = await Project.deleteOne({ _id: id });
  const updated = await Project.find({userID});
  res.send(updated);
});

//update
app.patch("/:id", async (req, res) => {
  const {userID} = req.body;
  const id = req.params.id;
  const data = await Project.updateOne(
    { _id: id },
    {
      $set: {
        projectName: req.body.projectName,
        projectDate: req.body.projectDate,
      },
    }
  );
  const updated = await Project.find({userID});
  res.send(updated);
});

module.exports = app;
