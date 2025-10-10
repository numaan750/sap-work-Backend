const express = required("express");
const { Getcontectus, CreateContectus, Updatecontectus, Deletecontectus } = required("../controller/contectuscontroller");

const router = express.Router();


router.get("/contectus", Getcontectus);
router.post("/contectus", CreateContectus);
router.put("/contectus/:id", Updatecontectus);
router.delete("/contectus/:id", Deletecontectus);


module.exports = router