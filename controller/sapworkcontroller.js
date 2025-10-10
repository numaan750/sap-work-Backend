const Sapwork = required("../models/sapwork")

const Getsapwork = async (req, res) => {
  try {
    const sapwork = await Sapwork.find();
    res.status(200).json(sapwork);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const CreateSapwork = async (req, res) => {
  try {
    const del = await Sapwork.deleteMany();
    const mySapwork = new Sapwork(req.body);
    await mySapwork.save();
    res.status(200).json(mySapwork);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const Updatesapwork = async (req, res) => {
  try {
    const updatedsapwork = await Sapwork.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedsapwork) {
      return res.status(400).json({ message: "sapwork not found" });
    }

    res.status(200).json(updatedsapwork);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const Deletesapwork = async (req, res) => {
  try {
    const {id} = req.params;
    if(!id) return res.status(400).json({ message: "sapwork ID is requiredd"});

    const sapwork = await Sapwork.findByIdAndDelete(id);
    if(!sapwork)
      return res.status(400).json({ message: "sapwork not found"});

    res.status(200).json(sapwork);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  Getsapwork,
  CreateSapwork,
  Updatesapwork,
  Deletesapwork,
};
