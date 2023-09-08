const Team = require("../model/Team");
const Project = require("../model/Project");

const createOne = async (data) => {
  const { title, description, deadline, assignedTeam } = data;

  const project = await Project.create({
    title,
    description,
    deadline,
    assignedTeam,
  });

  const team = await Team.findById(assignedTeam);

  team.teamProjects.push(project);
  team.save();

  return project;
};

const getAll = async () => {
  const res = Project.find({}).populate("assignedTeam");
  return res;
};

module.exports = {
  createOne,
  getAll,
};
