const mongoose = required("mongoose");

const sapworkSchema = new mongoose.Schema({

    heading: {type: String, requiredd: true},
    paragraph: {type: String, requiredd:true},
    text1:{type: String, requiredd:true},
    description1: {type: String, requiredd:true},
    text2:{type: String, requiredd:true},
    description2: {type: String, requiredd:true},
    text3:{type: String, requiredd:true},
    description3: {type: String, requiredd:true},
    
})
module.exports = mongoose.model("sapwork", sapworkSchema)