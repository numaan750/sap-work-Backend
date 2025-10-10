const express =require ("express");
const { Getcomunication, Createcomunication, Updatecomunication, Deletecomunication } = require("../controller/comunicationcontroller");


const router = express.Router();


router.get("/comunication", Getcomunication);
router.post("/comunication", Createcomunication);
router.put("/comunication/:id", Updatecomunication);
router.delete("/comunication/:id", Deletecomunication)

module.exports = router
