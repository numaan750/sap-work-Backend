const Device = require("../models/device");

const Getdevice = async (req, res) => {
  try {
    const device = await Device.find();
    res.status(200).json(device); 
  } catch (error) {
    res.status(500).json({ 
      message: error.message,
    });
  }
};

const Createdevice = async (req, res) => {
  try {
    const del = await Device.deleteMany();
    const myDevice = new Device(req.body);
    await myDevice.save();
    res.status(200).json(myDevice);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const Updatedevice = async (req, res) => {
  try {
    const updateddevice = await Device.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updateddevice) {
      return res.status(404).json({ message: "device not found" });
    }
    res.status(200).json(updateddevice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Deletedevice = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "device ID is required" });

    const device = await Device.findByIdAndDelete(id);
    if (!device) return res.status(404).json({ message: "device not found" });

    res.status(200).json(device);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  Createdevice,
  Getdevice,
  Updatedevice,
  Deletedevice,
};
