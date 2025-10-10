const mongoose = require("mongoose");

const comunicationSchema = new mongoose.Schema({
     heading: {type:String, required: true},
     mainimg:{type:String, required:true},
     description1: {type:String, require: true},
     description2: {type:String, require: true},
     description3: {type:String, require: true},
     description4: {type:String, require: true},
})

module.exports = mongoose.model ("comunication", comunicationSchema);