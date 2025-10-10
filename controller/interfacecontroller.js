const Interface = required("../models/interface")

const Getinterface = async (req, res) => {
  try {

    const interface = await Interface.find();
    res.status(200).json(interface); 
  } catch (error) {
    res.status(500).json({ 
      message: error.message,
    });
  }
};

const CreateInterface = async (req, res) => {
  try {
    const del = await Interface.deleteMany();
    const myInterface = new Interface(req.body);
    await myInterface.save();
    res.status(200).json(myInterface);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const Updateinterface = async (req, res) => {
    const updatedinterface = await Interface.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedinterface)
}


const Deleteinterface = async (req, res) => {
  try {
    const interface = await Interface.findByIdAndDelete(req.params.id);
    res.status(200).json(interface);
  } catch (error) {
    res.status(500).json({
      message:error.message,
    });
  }
};


module.exports= {
    Getinterface,
    CreateInterface,
    Updateinterface,
    Deleteinterface
}