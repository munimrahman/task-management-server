const {
  createOne,
  updateOne,
  deleteOne,
  getAll,
} = require("../services/taskService");

const createTask = async (req, res, next) => {
  try {
    const task = await createOne(req.body);

    res.status(200).json({
      message: "success",
      task,
    });
  } catch (error) {
    next(error);
  }
};

const updateTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await updateOne(req.body, id);

    res.status(200).json({
      message: "success",
      task,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const task = await deleteOne(req.params.id);

    res.status(200).json({
      message: "Successfully Deleted",
      deletedTask: task,
    });
  } catch (error) {
    next(error);
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await getAll();
    res.status(200).json({
      message: "success",
      tasks,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createTask, updateTaskById, deleteTask, getAllTasks };
