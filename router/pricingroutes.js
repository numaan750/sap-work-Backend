const express = require("express");
const { Getpricing, CreatePricing, Updatepricing, Deletepricing } = require("../controller/pricingcontroller");


const router = express.Router();


router.get("/pricing", Getpricing);
router.post("/pricing", CreatePricing);
router.put("/pricing/:id", Updatepricing);
router.delete("/pricing/:id", Deletepricing);

module.exports = router