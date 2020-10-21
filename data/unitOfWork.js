const Balance = require('../data/models/balance.model');
const Transaction = require('../data/models/transaction.model');


class UnitOfWork{

    balance = new Balance()
    transaction = new Transaction()    

    Save(){
        this.balance.Save()
        this.transaction.Save()
    }
}

var uow = new UnitOfWork();

module.exports = uow