const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  heading: { type: String, require: true },
  paragraph: { type: String, require: true },
  image1: { type: String, require: true },
  Name1: { type: String, require: true },
  role1: { type: String, require: true },
  image2: { type: String, require: true },
  Name2: { type: String, require: true },
  role2: { type: String, require: true },
  image3: { type: String, require: true },
  Name3: { type: String, require: true },
  role3: { type: String, require: true },
  image4: { type: String, require: true },
  Name4: { type: String, require: true },
  role4: { type: String, require: true },
});

module.exports = mongoose.model("team", teamSchema);
