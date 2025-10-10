const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
     heading: {type:String, required: true},
     buttontext: {type:String, required: true},
     mainimg:{type:String, required: true},
     description1: {type:String, require: true},
     icon1: {type: String, require: true},
     description2: {type:String, require: true},
     icon2: {type: String, require: true},
     description3: {type:String, require: true},
     icon3: {type: String, require: true},
     description4: {type:String, require: true},
     icon4: {type: String, require: true},
})

module.exports = mongoose.model("Device", deviceSchema);