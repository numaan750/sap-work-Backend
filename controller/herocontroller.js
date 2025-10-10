const Hero = require("../models/hero")


const Gethero = async (req, res) => {
  try {
    const hero = await Hero.find();
    res.status(200).json(hero); 
  } catch (error) {
    res.status(500).json({ 
      message: error.message,
    });
  }
};

const Createhero = async (req, res) => {
  try {
    const del = await Hero.deleteMany();
    const myHero = new Hero(req.body);
    await myHero.save();
    res.status(200).json (myHero);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const Updatehero = async (req, res) => {
  try {
    const hero = await Hero.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!hero) {
      return res.status(404).json({ message: "Hero not found" });
    }

    res.status(200).json({ message: "Hero updated successfully", hero });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const Deletehero = async (req, res) => {
  try {
    const hero = await Hero.findByIdAndDelete(req.params.id);
    if (!hero) {
      return res.status(404).json({ message: "Hero not found" });
    }
    res.status(200).json({ message: "Hero deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  Createhero,
  Gethero,
  Updatehero,
  Deletehero
}