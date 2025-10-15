const express  = require('express');
const validateUser = require('../middleware/validate.middleware')
const authController = require('../controller/auth.controller');
const { route } = require('../app');
const router = express.Router();

router.post('/register',validateUser.registerUserValidation, authController.registerUser  )
router.post('/login', validateUser.loginUserValidation, authController.loginUser )
module.exports = router;