const express = require("express");
const { Getsapwork, CreateSapwork, Updatesapwork, Deletesapwork } = require("../controller/sapworkcontroller");


const router = express.Router();


router.get("/sapwork", Getsapwork),
router.post("/sapwork", CreateSapwork),
router.put("/sapwork/:id", Updatesapwork),
router.delete("/sapwork/:id", Deletesapwork)


module.exports = router