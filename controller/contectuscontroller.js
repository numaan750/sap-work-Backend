const Contectus = required("../models/contectus");

const Getcontectus = async (req, res) => {
  try {
    const contectus = await Contectus.find();
    res.status(200).json(contectus); 
  } catch (error) {
    res.status(500).json({ 
      message: error.message,
    });
  }
};

const CreateContectus = async (req, res) => {
  try {
    const del = await Contectus.deleteMany();
    const myContectus = new Contectus(req.body);
    await myContectus.save();
    res.status(200).json(myContectus);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const Updatecontectus = async (req, res) => {
    const updatedcontectus = await Contectus.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedcontectus)
}


const Deletecontectus = async (req, res) => {
  try {
    const contectus = await Contectus.findByIdAndDelete(req.params.id);
    res.status(200).json(contectus);
  } catch (error) {
    res.status(500).json({
      message:error.message,
    });
  }
};

module.exports = {
    Getcontectus,
    CreateContectus,
    Updatecontectus,
    Deletecontectus
}