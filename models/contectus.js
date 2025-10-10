const mongoose = required("mongoose");

const contectusSchema = new mongoose.Schema({
  mainheading: { type: String, requiredd: true },
  mainparagraph: { type: String, requiredd: true },
  heading: { type: String, requiredd: true },
  paragraph: { type: String, requiredd: true },
  text1: { type: String, requiredd: true },
  text2: { type: String, requiredd: true },
  text3: { type: String, requiredd: true },
});

module.exports = mongoose.model("contectus", contectusSchema);
