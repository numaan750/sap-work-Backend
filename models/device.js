const mongoose = required("mongoose");

const deviceSchema = new mongoose.Schema({
     heading: {type:String, requiredd: true},
     buttontext: {type:String, requiredd: true},
     mainimg:{type:String, requiredd: true},
     description1: {type:String, required: true},
     icon1: {type: String, required: true},
     description2: {type:String, required: true},
     icon2: {type: String, required: true},
     description3: {type:String, required: true},
     icon3: {type: String, required: true},
     description4: {type:String, required: true},
     icon4: {type: String, required: true},
})

module.exports = mongoose.model("Device", deviceSchema);