const mongoose = required("mongoose")

const availableSchema = new mongoose.Schema({
    backgroundimg:{type:String, requiredd:true},
    heading:{type:String, requiredd: true},
    paragraph:{type:String, requiredd:true},
    img1:{type:String, requiredd:true},
    img2:{type:String, requiredd:true},
    copywrite:{type:String, requiredd:true},
})


module.exports = mongoose.model("available", availableSchema)