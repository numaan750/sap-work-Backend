const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({

  usersCount: {type: String, required: true},
  usersTitle: {type: String, required: true},

  downloadsCount: {type: String, required: true},
  downloadsTitle: {type: String, required: true},

  customersCount: {type: String, required: true},
  customersTitle: {type: String, required: true,},

  developersCount: {type: String, required: true},
  developersTitle: {type: String, required: true},
  
});

module.exports = mongoose.model("States", stateSchema);