const State = require("../models/state"); // stateSchema import karo


const createState = async (req, res) => {
  try {
    const del=await State.deleteMany()
    const state = new State(req.body);
    await state.save();
    res.status(201).json(state);
    
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getState = async (req, res) => {
  try {
    const states = await State.find();
    res.json(states);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStateById = async (req, res) => {
  try {
    const state = await State.findById(req.params.id);
    if (!state) return res.status(404).json({ message: "State not found" });
    res.json(state);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateState = async (req, res) => {
  try {
    const state = await State.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!state) return res.status(404).json({ message: "State not found" });
    res.json(state);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteState = async (req, res) => {
  try {
    const state = await State.findByIdAndDelete(req.params.id);
    if (!state) return res.status(404).json({ message: "State not found" });
    res.json({ message: "State deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  createState,
  getState,
  getStateById,
  updateState,
  deleteState,
};