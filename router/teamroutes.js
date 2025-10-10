const express = require("express");
const { Getteam, CreateTeam, UpdateTeam, Deleteteam } = require("../controller/teamcontroller");

const router = express.Router();


router.get("/team", Getteam);
router.post("/team", CreateTeam);
router.put("/team/:id", UpdateTeam);
router.delete("/team/:id", Deleteteam);


module.exports = router