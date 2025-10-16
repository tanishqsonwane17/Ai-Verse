const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');

async function authMiddleware(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await userModel.findById(decoded.id).select('-password');
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ message: 'Token verification failed' });
  }
}

module.exports = { authMiddleware };
