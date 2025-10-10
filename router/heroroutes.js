const express = require("express");
const { Gethero, Createhero, Updatehero, Deletehero } = require("../controller/herocontroller");
const router = express.Router();



router.get("/hero", Gethero);
router.post("/hero", Createhero);
router.put("/hero/:id", Updatehero);
router.delete("/hero/:id", Deletehero);

module.exports = router