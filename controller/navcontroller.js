const Navbar = require("../models/navbar");


const Getnavbar = async (req, res) => {
  try {
    const navbar = await Navbar.find();
    res.status(200).json(navbar);
     
  } catch (error) {
    res.status(500).json({ 
      message: error.message,
    });
  }
};

const CreateNavbar = async (req, res) => {
  try {
    const del = await Navbar.deleteMany();
    const myNav = new Navbar(req.body);
    await myNav.save();
    res.status(200).json(myNav);    
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const Updatenavbar = async (req, res) => {
    const updatednavbar = await Navbar.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatednavbar)
}


const Deletenavbar = async (req, res) => {
  try {
    const navbar = await Navbar.findByIdAndDelete(req.params.id);
    res.status(200).json(navbar);
  } catch (error) {
    res.status(500).json({
      message:error.message,
    });
  }
};

module.exports = {
  CreateNavbar,
  Getnavbar,
  Updatenavbar,
  Deletenavbar,
};
