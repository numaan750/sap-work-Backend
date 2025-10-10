const express = require("express");
const { Getfeatures, Createfeatures, Updatefeatures, Deletefeatures } = require("../controller/featurescontroller");
const router = express.Router();


router.get("/features", Getfeatures);
router .post("/features", Createfeatures);
router.put("/features/:id", Updatefeatures);
router.delete("/features/:id", Deletefeatures);


module.exports = router


