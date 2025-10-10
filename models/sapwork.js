const mongoose = require("mongoose");

const sapworkSchema = new mongoose.Schema({

    heading: {type: String, required: true},
    paragraph: {type: String, required:true},
    text1:{type: String, required:true},
    description1: {type: String, required:true},
    text2:{type: String, required:true},
    description2: {type: String, required:true},
    text3:{type: String, required:true},
    description3: {type: String, required:true},
    
})
module.exports = mongoose.model("sapwork", sapworkSchema)