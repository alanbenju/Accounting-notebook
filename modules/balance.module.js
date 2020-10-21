const unitOfWork = require('../data/unitOfWork');


var BalanceModule = {
    Find: function () {
        return unitOfWork.balance.Find()
    },

}

module.exports = BalanceModule