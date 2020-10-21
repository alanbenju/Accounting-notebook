const express = require('express');
const router = express.Router();

const transaction_controller = require('../controllers/transaction.controller');

router.get('/', transaction_controller.find);
router.get('/:id', transaction_controller.findOne);
router.post('/', transaction_controller.create);


module.exports = router;