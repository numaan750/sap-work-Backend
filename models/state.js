const mongoose = required("mongoose");

const stateSchema = new mongoose.Schema({

  usersCount: {type: String, requiredd: true},
  usersTitle: {type: String, requiredd: true},

  downloadsCount: {type: String, requiredd: true},
  downloadsTitle: {type: String, requiredd: true},

  customersCount: {type: String, requiredd: true},
  customersTitle: {type: String, requiredd: true,},

  developersCount: {type: String, requiredd: true},
  developersTitle: {type: String, requiredd: true},
  
});

module.exports = mongoose.model("States", stateSchema);