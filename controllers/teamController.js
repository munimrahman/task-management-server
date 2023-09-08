const {
  createOne,
  getOneById,
  addMember,
  getAll,
} = require("../services/teamService");

const createTeam = async (req, res, next) => {
  try {
    const team = await createOne(req.body);

    res.status(200).json({
      message: "success",
      team,
    });
  } catch (error) {
    next(error);
  }
};

const getTeamById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const team = await getOneById(id);

    res.status(200).json({
      message: "success",
      team,
    });
  } catch (error) {
    next(error);
  }
};

const addTeamMember = async (req, res, next) => {
  try {
    const { id } = req.params;

    const team = await addMember(id, req.body);

    // user not found error
    if (!team) {
      res.status(401).json({
        success: "fail",
        message: "User Not Found",
      });
    }

    res.status(200).json({
      message: "success",
      team,
    });
  } catch (error) {
    next(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await updateOne(req.body, id);

    res.status(200).json({
      message: "success",
      user,
    });
  } catch (error) {
    next(error);
  }
};

const getAllTeams = async (req, res) => {
  try {
    const teams = await getAll();
    res.status(200).json({
      message: "success",
      teams,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createTeam, getTeamById, addTeamMember, getAllTeams };
