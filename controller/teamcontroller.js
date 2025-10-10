const Team = require("../models/team");


const Getteam = async (req, res) => {
  try {
    const team = await Team.find();
    res.status(200).json(team); 
  } catch (error) {
    res.status(500).json({ 
      message: error.message,
    });
  }
};


const CreateTeam = async (req, res) => {
  try {
    const del = await Team.deleteMany();
    const myTeam = new Team(req.body);
    await myTeam.save();
    res.status(200).json(myTeam);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const UpdateTeam = async (req, res) => {
    const updatedteam= await Team.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedteam)
}


const Deleteteam = async (req, res) => {
  try {
    const team = await Team.findByIdAndDelete(req.params.id);
    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({
      message:error.message,
    });
  }
};


module.exports = {
    Getteam,
    CreateTeam,
    UpdateTeam,
    Deleteteam
}