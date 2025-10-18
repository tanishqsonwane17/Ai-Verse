const express = require('express');
const router = express.Router();
const aiController = require('../controller/ai.controller')

router.post('/generate',aiController.regenerateResponse);
router.post('/get-result',aiController.getResult);

module.exports = router;