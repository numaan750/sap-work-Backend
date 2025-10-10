const mongoose = required("mongoose")

const userSchema = new mongoose.Schema({
    username:{type:String, requiredd:true},
    email:{type:String, requiredd:true},
    password:{type:String, requiredd:true},
})

module.exports = mongoose.model("User", userSchema);