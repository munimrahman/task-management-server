const { createOne, getAll } = require("../services/projectService");

const createProject = async (req, res, next) => {
  try {
    const project = await createOne(req.body);

    res.status(200).json({
      message: "success",
      project,
    });
  } catch (error) {
    next(error);
  }
};

const getAllProjects = async (req, res) => {
  try {
    const projects = await getAll();
    res.status(200).json({
      message: "success",
      projects,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createProject, getAllProjects };
