const express = required("express");
const { Createuser, loginuser } = required("../controller/usercontroller");


const router = express.Router();

router.post("/user", Createuser)
router.post("/login", loginuser);


module.exports = router