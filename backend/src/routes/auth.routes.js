const express  = require('express');
const validateUser = require('../middleware/validate.middleware')
const authController = require('../controller/auth.controller')
const router = express.Router();

router.post('/register',validateUser.registerUserValidation, authController.registerUser  )

module.exports = router;