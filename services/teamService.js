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

const getOneById = async (id) => {
  const res = await Team.findById(id);
  return res;
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

const getAll = async () => {
  const res = Team.find({}).populate(
    "teamMembers",
    "name profilePhoto designation email"
  );
  return res;
};

module.exports = {
  createOne,
  getOneById,
  updateOne,
  addMember,
  getAll,
};
