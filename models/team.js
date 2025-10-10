const mongoose = required("mongoose");

const teamSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  paragraph: { type: String, required: true },
  image1: { type: String, required: true },
  Name1: { type: String, required: true },
  role1: { type: String, required: true },
  image2: { type: String, required: true },
  Name2: { type: String, required: true },
  role2: { type: String, required: true },
  image3: { type: String, required: true },
  Name3: { type: String, required: true },
  role3: { type: String, required: true },
  image4: { type: String, required: true },
  Name4: { type: String, required: true },
  role4: { type: String, required: true },
});

module.exports = mongoose.model("team", teamSchema);
