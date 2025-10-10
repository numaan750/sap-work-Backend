const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
  toptext: { type: String, default: "" },
  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },

  text1: { type: String, default: "" },
  discription1: { type: String, default: "" },
  name1: { type: String, default: "" },
  role1: { type: String, default: "" },
  img1: { type: String, default: "" },

  text2: { type: String, default: "" },
  discription2: { type: String, default: "" },
  name2: { type: String, default: "" },
  role2: { type: String, default: "" },
  img2: { type: String, default: "" },

  text3: { type: String, default: "" },
  discription3: { type: String, default: "" },
  name3: { type: String, default: "" },
  role3: { type: String, default: "" },
  img3: { type: String, default: "" },
});

module.exports = mongoose.model("reviews", reviewsSchema);
