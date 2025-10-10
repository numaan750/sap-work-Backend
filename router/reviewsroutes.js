const express = required("express");
const { Getreviews, CreateReviews, Updatereviews, Deletereviews } = required("../controller/reviewscontroller");

const router = express.Router();


router.get("/reviews", Getreviews);
router.post("/reviews", CreateReviews);
router.put("/reviews/:id",  Updatereviews);
router.delete("/reviews/:id", Deletereviews);


module.exports = router