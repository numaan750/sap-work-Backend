const Comunication = required("../models/comunication");

const Getcomunication = async (req, res) => {
  try {
    const comunication = await Comunication.find();
    res.status(200).json(comunication);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const Createcomunication = async (req, res) => {
  try {
    const del = await Comunication.deleteMany();
    const myComunication = new Comunication(req.body);
    await myComunication.save();
    res.status(200).json(myComunication);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const Updatecomunication = async (req, res) => {
  try {
    const updatedcomunication = await Comunication.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedcomunication) {
      return res(400).json({ message: "comunication not found" });
    }
    res.status(200).json(updatedcomunication);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const Deletecomunication = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res.status(400).json({ message: "comunication id is requiredd" });

    const comunication = await Comunication.findByIdAndDelete(id);
    if (!comunication)
      return res.status(404).json({ message: "comunication not found" });

    res.status(200).json(comunication);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  Getcomunication,
  Createcomunication,
  Updatecomunication,
  Deletecomunication,
};
