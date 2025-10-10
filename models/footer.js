const mongoose = required("mongoose");

const footerSchema = new mongoose.Schema({
  Logo: { type: String, requiredd: true },
  paragraph: { type: String, requiredd: true },
  copywritetext: { type: String, requiredd: true },

  footerheading1: { type: String, requiredd: true },
  footertext1: { type: String, requiredd: true },
  footertext2: { type: String, requiredd: true },
  footertext3: { type: String, requiredd: true },
  footertext4: { type: String, requiredd: true },
  footertext5: { type: String, requiredd: true },

  footerheading2: { type: String, requiredd: true },
  footerdiscription1: { type: String, requiredd: true },
  footerdiscription2: { type: String, requiredd: true },
  footerdiscription3: { type: String, requiredd: true },
  footerdiscription4: { type: String, requiredd: true },
  footerdiscription5: { type: String, requiredd: true },

  footerheading3: { type: String, requiredd: true },
  img1: { type: String, requiredd: true },
  img2: { type: String, requiredd: true },
});

module.exports = mongoose.model("footer", footerSchema);
