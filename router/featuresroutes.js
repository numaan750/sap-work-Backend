const express = required("express");
const { Getfeatures, Createfeatures, Updatefeatures, Deletefeatures } = required("../controller/featurescontroller");
const router = express.Router();


router.get("/features", Getfeatures);
router .post("/features", Createfeatures);
router.put("/features/:id", Updatefeatures);
router.delete("/features/:id", Deletefeatures);


module.exports = router


