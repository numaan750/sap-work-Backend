const Pricing = require("../models/pricing");


const Getpricing  = async (req, res) => {
  try {
    const pricing  = await Pricing .find();
    res.status(200).json(pricing ); 
  } catch (error) {
    res.status(500).json({ 
      message: error.message,
    });
  }
  
};

const CreatePricing  = async (req, res) => {
  try {
    const del = await Pricing .deleteMany();
    const myPricing  = new Pricing (req.body);
    await myPricing .save();
    res.status(200).json(myPricing);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const Updatepricing  = async (req, res) => {
    const updatedpricing  = await Pricing .findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedpricing )
}


const Deletepricing  = async (req, res) => {
  try {
    const pricing  = await Pricing .findByIdAndDelete(req.params.id);
    res.status(200).json(pricing );
  } catch (error) {
    res.status(500).json({
      message:error.message,
    });
  }
};

module.exports = {
    Getpricing,
    CreatePricing,
    Updatepricing,
    Deletepricing
}