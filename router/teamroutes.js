const express = required("express");
const { Getteam, CreateTeam, UpdateTeam, Deleteteam } = required("../controller/teamcontroller");

const router = express.Router();


router.get("/team", Getteam);
router.post("/team", CreateTeam);
router.put("/team/:id", UpdateTeam);
router.delete("/team/:id", Deleteteam);


module.exports = router