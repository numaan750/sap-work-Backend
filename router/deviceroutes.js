const express = required("express");
const { Getdevice, Createdevice, Updatedevice, Deletedevice } = required("../controller/devicecontroller");

const router =express.Router();

router.get("/device", Getdevice);
router.post("/device", Createdevice);
router.put("/device/:id", Updatedevice);
router.delete("/device/:id", Deletedevice);



module.exports = router