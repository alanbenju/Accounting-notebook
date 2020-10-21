const BalanceModule = require('../modules/balance.module');


exports.find = function (req, res) {
    var balance = BalanceModule.Find()
    return res.send(balance);
};