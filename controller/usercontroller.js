const User = require("../models/User.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Createuser = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    
    if (!username) {
      return res.json({
        status: "error",
        message: "Username required",
      });
    }
    if (!email) {
      return res.json({
        status: "error",
        message: "email required",
        
      });
    }
    if (!password) {
      return res.json({
        status: "error",
        message: "Password required",
      });
    }
    const found = await User.findOne({ email: email });
    if (found) {
      return res.json({
        status: "error",
        message: "user alredy exist",
      });
    }
    const hash = await bcrypt.hashSync(password, 10)
    const newUser = new User({
      username,
      email,
      password:hash,
    });

    await newUser.save();
    const token =  jwt.sign({email: newUser.email}, process.env.SECRETE_KEY)
    return res.json({
      status: "Success",
      data: newUser,
      token
    });
  } catch (error) {
    return res.json({
      status: "error",
      error: error.message,
    });
  }
};

const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        status: "error",
        message: "User not found"
      });
    }

    // // direct password match (no bcrypt)
    // if (user.password !== password) {
    //   return res.json({
    //     status: "error",
    //     message: "Invalid password"
    //   });
    // }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.json({
        status: "error",
        message: "Invalid password"
      });
    }
    const token =  jwt.sign({email: user.email}, process.env.SECRETE_KEY)

       return res.json({
         status: "success",
         data: {
           email: user.email,
           username: user.username
         },
         token
        });
    

    

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Server error"
    });
  }
};
module.exports = {
  Createuser,
  loginuser,
};
