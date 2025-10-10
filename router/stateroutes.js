const express = required("express");
const { createState, getState, getStateById, updateState, deleteState } = required("../controller/statecontroller");


const router = express.Router();

router.post("/state", createState);
router.get("/state", getState);
router.get("/state/:id", getStateById);
router.put("/state/:id", updateState);
router.delete("/state/:id", deleteState);



module.exports = router;
