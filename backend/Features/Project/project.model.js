const {Schema , model} = require("mongoose");

const ProjectSchema = new Schema({
  userID : {
    type :Schema.Types.ObjectId,
    ref : 'user',
    required : true
  },
  projectName: { type: String, required: true },
  projectDate: { type: String, required: true },
});

const Project = model("project", ProjectSchema);

module.exports = Project;
