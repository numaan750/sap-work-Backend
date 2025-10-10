const express = required("express");
const { Getavailable, CreateAvailable, Deleteavailable, UpdateAvailable } = required("../controller/availablecontroller");


const router = express.Router();


router.get("/available", Getavailable);
router.post("/available", CreateAvailable);
router.put("/available/:id", UpdateAvailable);
router.delete("/available/:id", Deleteavailable);


module.exports = router