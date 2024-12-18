const express = require('express');
const {registerUser} = require('../../controllers/auth/auth-controller')


const router = express.Router();


router.post('/register', registerUser );
router.get('/llll', ()=>{
    console.log("he")
} );




module.exports = router;


