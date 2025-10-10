const express = required("express");
const { Getsapwork, CreateSapwork, Updatesapwork, Deletesapwork } = required("../controller/sapworkcontroller");


const router = express.Router();


router.get("/sapwork", Getsapwork),
router.post("/sapwork", CreateSapwork),
router.put("/sapwork/:id", Updatesapwork),
router.delete("/sapwork/:id", Deletesapwork)


module.exports = router