const mongoose = required ("mongoose");

const pricingSchema = new mongoose.Schema({
       heading:{type:String, required:true},
       paragraph: {type:String, required:true},
       copyrighttext :{type:String, required:true},

       maintext1:{type:String, required:true},
       price1:{type:String, requiredd:true},
       card1smalltext1:{type:String, required:true},
       card1smalltext2:{type:String, required:true},
       card1smalltext3:{type:String, required:true},
       card1smalltext4:{type:String, required:true},
       buttontext1:{type:String, required:true},       
       maintext2:{type:String, required:true},
       price2:{type:String, requiredd:true},
       card2smalltext1:{type:String, required:true},
       card2smalltext2:{type:String, required:true},
       card2smalltext3:{type:String, required:true},
       card2smalltext4:{type:String, required:true},
       buttontext2:{type:String, required:true},
});

module.exports = mongoose.model("pricing", pricingSchema)
