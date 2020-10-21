const express = require('express');
const router = express.Router();

const balance_controller = require('../controllers/balance.controller');

router.get('/', balance_controller.find);

module.exports = router;