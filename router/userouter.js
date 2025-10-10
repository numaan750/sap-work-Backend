const express = require("express");
const { Createuser, loginuser } = require("../controller/usercontroller");


const router = express.Router();

router.post("/user", Createuser)
router.post("/login", loginuser);


module.exports = router