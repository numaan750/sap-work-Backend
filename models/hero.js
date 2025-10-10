const mongoose = require('mongoose');


const heroschema = new mongoose.Schema({
  heading: { type: String, required: true },
  paragraph: { type: String, required: true },
  image1: { type: String, required: true },
  image2: { type: String, required: true },   // ✅ fix
  copyright: { type: String, required: true },// ✅ fix
  mainimg: { type: String, required: true }
  
});

module.exports = mongoose.model("Hero", heroschema);