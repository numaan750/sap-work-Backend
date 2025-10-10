const mongoose = require("mongoose")

const availableSchema = new mongoose.Schema({
    backgroundimg:{type:String, required:true},
    heading:{type:String, required: true},
    paragraph:{type:String, required:true},
    img1:{type:String, required:true},
    img2:{type:String, required:true},
    copywrite:{type:String, required:true},
})


module.exports = mongoose.model("available", availableSchema)