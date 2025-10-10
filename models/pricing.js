const mongoose = require ("mongoose");

const pricingSchema = new mongoose.Schema({
       heading:{type:String, require:true},
       paragraph: {type:String, require:true},
       copyrighttext :{type:String, require:true},

       maintext1:{type:String, require:true},
       price1:{type:String, required:true},
       card1smalltext1:{type:String, require:true},
       card1smalltext2:{type:String, require:true},
       card1smalltext3:{type:String, require:true},
       card1smalltext4:{type:String, require:true},
       buttontext1:{type:String, require:true},       
       maintext2:{type:String, require:true},
       price2:{type:String, required:true},
       card2smalltext1:{type:String, require:true},
       card2smalltext2:{type:String, require:true},
       card2smalltext3:{type:String, require:true},
       card2smalltext4:{type:String, require:true},
       buttontext2:{type:String, require:true},
});

module.exports = mongoose.model("pricing", pricingSchema)
