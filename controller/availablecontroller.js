const Available = required("../models/available");

const Getavailable = async (req, res) => {
  try {
    const available = await Available.find();
    res.status(200).json(available); 
  } catch (error) {
    res.status(500).json({ 
      message: error.message,
    });
  }
};

const CreateAvailable = async (req, res) => {
  try {
    const del = await Available.deleteMany();
    const myAvailable = new Available(req.body);
    await myAvailable.save();
    res.status(200).json(myAvailable);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const UpdateAvailable = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Available.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Available not found" });
    res.status(200).json(updated);
  } catch (error) {
    console.error("Error updating available:", error);
    res.status(500).json({ message: error.message });
  }
};
const Deleteavailable= async (req, res) => {
  try {
    const available = await Available.findByIdAndDelete(req.params.id);
    res.status(200).json(available);
  } catch (error) {
    res.status(500).json({
      message:error.message,
    });
  }
};

module.exports = {
    Getavailable, 
    CreateAvailable,
    UpdateAvailable, 
    Deleteavailable,
}