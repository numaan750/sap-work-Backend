const mongoose = required('mongoose');

const featuresschema = new mongoose.Schema({
  top: {type: String, requiredd:true},
  heading:{type:String, requiredd:true},
  paragraph:{type:String, requiredd:true},
 card1heading:{type: String, requiredd: true},
 card1paragraph:{type: String, requiredd:  true},
 card2heading:{type: String, requiredd: true},
 card2paragraph:{type: String, requiredd : true},
 card3heading : {type: String, requiredd: true},
 card3paragraph: {type: String, requiredd: true},
})


module.exports = mongoose.model('features', featuresschema);