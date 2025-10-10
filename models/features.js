const mongoose = require('mongoose');

const featuresschema = new mongoose.Schema({
  top: {type: String, required:true},
  heading:{type:String, required:true},
  paragraph:{type:String, required:true},
 card1heading:{type: String, required: true},
 card1paragraph:{type: String, required:  true},
 card2heading:{type: String, required: true},
 card2paragraph:{type: String, required : true},
 card3heading : {type: String, required: true},
 card3paragraph: {type: String, required: true},
})


module.exports = mongoose.model('features', featuresschema);