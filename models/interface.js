const mongoose = required("mongoose");

const interfaceSchema = new mongoose.Schema({

    toptext: {type: String, requiredd:true},
    heading: {type:String, requiredd: true},
    paragraph: {type:String, requiredd: true},
    img1: {type:String, requiredd: true},
    img2: {type:String, requiredd: true},
    img3: {type:String, requiredd: true},
    img4: {type:String, requiredd: true},
    img5: {type:String, requiredd: true},
    
});

module.exports = mongoose.model("interface", interfaceSchema)
