const Footer = required("../models/footer");

const Getfooter = async (req, res) => {
  try {
    const footer = await Footer.find();
    res.status(200).json(footer); 
  } catch (error) {
    res.status(500).json({ 
      message: error.message,
    });
  }
};


const CreateFooter = async (req, res) => {
  try {
    const del = await Footer.deleteMany();
    const myFooter = new Footer(req.body);
    await myFooter.save();
    res.status(200).json(myFooter);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const Updatefooter = async (req, res) => {
    const updatedfooter = await Footer.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedfooter)
}


const Deletefooter = async (req, res) => {
  try {
    const footer = await Footer.findByIdAndDelete(req.params.id);
    res.status(200).json(footer);
  } catch (error) {
    res.status(500).json({
      message:error.message,
    });
  }
};


module.exports = {
  Getfooter,
  CreateFooter,
  Updatefooter,
  Deletefooter
};