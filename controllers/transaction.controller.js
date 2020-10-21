const TransactionModule = require('../modules/transaction.module');

exports.find = function (req, res) {
    var transactions = TransactionModule.find()
    return res.send(transactions)
};

exports.findOne = function (req, res) {
    var transaction = TransactionModule.findOne(req.params.id)
    if (!transaction) return res.status(404).send("Transaction doesn't exist")
    return res.send(transaction)
};

exports.create = function (req, res) {
    var t = TransactionModule.create(req.body)
    if (!t) return res.status(400).send("Transaction wasn't made")
    return res.send(t)
};