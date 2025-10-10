const express = require("express");
const { Getfooter, CreateFooter, Updatefooter, Deletefooter } = require("../controller/footercontroller");

const router = express.Router();


router.get("/footer", Getfooter);
router.post("/footer", CreateFooter);
router.put("/footer/:id", Updatefooter);
router.delete("/footer/:id", Deletefooter);



module.exports = router