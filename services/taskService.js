const Task = require("../model/Task");

const createOne = async (data) => {
  const task = await Task.create(data);
  return task;
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

const getAll = async () => {
  const res = Task.find({});
  return res;
};

module.exports = { createOne, updateOne, deleteOne, getAll };
