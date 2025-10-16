const express = require('express');
const validateUser = require('../middleware/validate.middleware');
const authController = require('../controller/auth.controller');
const { authMiddleware } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/register', validateUser.registerUserValidation, authController.registerUser);
router.post('/login', validateUser.loginUserValidation, authController.loginUser);
router.get('/metaverse', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'Token is valid', user: req.user });
});

module.exports = router;
