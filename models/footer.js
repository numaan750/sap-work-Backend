const mongoose = require("mongoose");

const footerSchema = new mongoose.Schema({
  Logo: { type: String, required: true },
  paragraph: { type: String, required: true },
  copywritetext: { type: String, required: true },

  footerheading1: { type: String, required: true },
  footertext1: { type: String, required: true },
  footertext2: { type: String, required: true },
  footertext3: { type: String, required: true },
  footertext4: { type: String, required: true },
  footertext5: { type: String, required: true },

  footerheading2: { type: String, required: true },
  footerdiscription1: { type: String, required: true },
  footerdiscription2: { type: String, required: true },
  footerdiscription3: { type: String, required: true },
  footerdiscription4: { type: String, required: true },
  footerdiscription5: { type: String, required: true },

  footerheading3: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: true },
});

module.exports = mongoose.model("footer", footerSchema);
