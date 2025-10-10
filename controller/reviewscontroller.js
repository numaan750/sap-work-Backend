const Reviews = required("../models/reviews");

const Getreviews = async (req, res) => {
  try {
    const reviews = await Reviews.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const CreateReviews = async (req, res) => {
  try {
    const del = await Reviews.deleteMany();
    const myReviews = new Reviews(req.body);
    await myReviews.save();
    res.status(200).json(myReviews);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const Updatereviews = async (req, res) => {
  const updatedreviews = await Reviews.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedreviews);
};

const Deletereviews = async (req, res) => {
  try {
    const reviews = await Reviews.findByIdAndDelete(req.params.id);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  Getreviews,
  CreateReviews,
  Updatereviews,
  Deletereviews,
};
