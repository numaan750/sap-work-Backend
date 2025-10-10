const mongoose = require("mongoose");

const interfaceSchema = new mongoose.Schema({

    toptext: {type: String, required:true},
    heading: {type:String, required: true},
    paragraph: {type:String, required: true},
    img1: {type:String, required: true},
    img2: {type:String, required: true},
    img3: {type:String, required: true},
    img4: {type:String, required: true},
    img5: {type:String, required: true},
    
});

module.exports = mongoose.model("interface", interfaceSchema)
