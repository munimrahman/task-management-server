const Task = require("../model/Task");
const Team = require("../model/Team");
const User = require("../model/User");

const createOne = async (data) => {
  const task = await Task.create(data);

  return task;
};

const updateOne = async (data, id) => {
  const updatedRes = await Team.findByIdAndUpdate(id, data, {
    runValidators: true,
    new: true,
  });

  return updatedRes;
};

const getAll = async () => {
  const res = Task.find({});
  return res;
};

module.exports = { createOne, getAll };
