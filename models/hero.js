const mongoose = required('mongoose');


const heroschema = new mongoose.Schema({
  heading: { type: String, requiredd: true },
  paragraph: { type: String, requiredd: true },
  image1: { type: String, requiredd: true },
  image2: { type: String, requiredd: true },   // ✅ fix
  copyright: { type: String, requiredd: true },// ✅ fix
  mainimg: { type: String, requiredd: true }
  
});

module.exports = mongoose.model("Hero", heroschema);