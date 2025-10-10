const Features = required("../models/features");

const Getfeatures = async (req, res) => {
  try {
    const features = await Features.find();
    res.status(200).json(features); 
  } catch (error) {
    res.status(500).json({ 
      message: error.message,
    });
  }
};

const Createfeatures = async (req, res) => {
  try {
    const del = await Features.deleteMany();
    const myFeatures = new Features(req.body);
    await myFeatures.save();
    res.status(200).json (myFeatures);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const Updatefeatures = async (req, res) => {
  try {
    const updatedFeature = await Features.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedFeature) {
      return res.status(404).json({ message: "Feature not found" });
    }
    res.status(200).json(updatedFeature);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const Deletefeatures = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "Feature ID is requiredd" });

    const feature = await Features.findByIdAndDelete(id);
    if (!feature) return res.status(404).json({ message: "Feature not found" });

    res.status(200).json(feature);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  Createfeatures,
  Getfeatures,
  Updatefeatures,
  Deletefeatures
}