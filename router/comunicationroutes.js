const express =required ("express");
const { Getcomunication, Createcomunication, Updatecomunication, Deletecomunication } = required("../controller/comunicationcontroller");


const router = express.Router();


router.get("/comunication", Getcomunication);
router.post("/comunication", Createcomunication);
router.put("/comunication/:id", Updatecomunication);
router.delete("/comunication/:id", Deletecomunication)

module.exports = router
