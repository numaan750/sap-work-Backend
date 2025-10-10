const express = require("express");
const { Getinterface, CreateInterface, Updateinterface, Deleteinterface } = require("../controller/interfacecontroller");

const router = express.Router();


router.get("/interface", Getinterface);
router.post("/interface", CreateInterface);
router.put("/interface/:id", Updateinterface);
router.delete("/interface/:id", Deleteinterface)


module.exports = router