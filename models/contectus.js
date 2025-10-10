const mongoose = require("mongoose");

const contectusSchema = new mongoose.Schema({
  mainheading: { type: String, required: true },
  mainparagraph: { type: String, required: true },
  heading: { type: String, required: true },
  paragraph: { type: String, required: true },
  text1: { type: String, required: true },
  text2: { type: String, required: true },
  text3: { type: String, required: true },
});

module.exports = mongoose.model("contectus", contectusSchema);
