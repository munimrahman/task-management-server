const Task = require("../model/Task");

const createOne = async (data) => {
  const task = await Task.create(data);
  return task;
};

const getOneById = async (id) => {
  const res = await Task.findById(id);
  return res;
};

const updateOne = async (data, id) => {
  const updatedRes = await Task.findByIdAndUpdate(id, data, {
    runValidators: true,
    new: true,
  });

  return updatedRes;
};

const deleteOne = async (id) => {
  const res = Task.findByIdAndDelete(id);
  return res;
};

const getAll = async (query) => {
  const res = Task.find(query)
    .populate("assignTo", "name")
    .populate("project", "title");
  return res;
};

module.exports = { createOne, getOneById, updateOne, deleteOne, getAll };
