const express = required('express');
const { Getnavbar,Updatenavbar, Deletenavbar, CreateNavbar } = required('../controller/navcontroller');
const router = express.Router();

router.get('/navbar', Getnavbar)
router.post('/navbar', CreateNavbar)
router.put('/navbar/:id', Updatenavbar)
router.delete('/navbar/:id', Deletenavbar)


 module.exports = router