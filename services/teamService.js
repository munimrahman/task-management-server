const Team = require("../model/Team");
const User = require("../model/User");

const createOne = async (data) => {
  const { name, creatorsId } = data;
  const teamData = { name, teamMembers: [creatorsId] };
  const team = await Team.create(teamData);
  const creator = await User.findById(creatorsId);
  creator.myTeams.push(team);
  creator.save();
  return team;
};

const updateOne = async (data, id) => {
  const updatedRes = await Team.findByIdAndUpdate(id, data, {
    runValidators: true,
    new: true,
  });

  return updatedRes;
};

const addMember = async (teamId, data) => {
  const { userEmail, senderId } = data;
  const user = await User.findOne({ email: userEmail });
  if (!user) return undefined;
  const sender = await User.findById(senderId);
  const senderName = sender.name;
  const team = await Team.findById(teamId);
  team.teamMembers.push(user._id);

  const res = team.save();
  user.myTeams.push(teamId);
  user.notifications.push(`${senderName} added you in his team`);
  user.save();
  return res;
};

const getOneById = async (id) => {
  const res = Team.findById(id);
  return res;
};

const getOneByEmail = async (email) => {
  const res = Team.findOne({ email });
  return res;
};

const getAll = async () => {
  const res = Team.find({});
  return res;
};

module.exports = {
  createOne,
  updateOne,
  addMember,
  getAll,
};
