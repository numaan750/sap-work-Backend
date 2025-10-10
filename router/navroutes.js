const express = require('express');
const { Getnavbar,Updatenavbar, Deletenavbar, CreateNavbar } = require('../controller/navcontroller');
const router = express.Router();

router.get('/navbar', Getnavbar)
router.post('/navbar', CreateNavbar)
router.put('/navbar/:id', Updatenavbar)
router.delete('/navbar/:id', Deletenavbar)


 module.exports = router