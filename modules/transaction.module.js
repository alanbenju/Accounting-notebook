const unitOfWork = require('../data/unitOfWork');
const typesEnum = require('./Enums/transaction.enums')

var TransactionModule = {
    create: function (transaction) {
        var result = false
        if (transaction.type == typesEnum.DEBIT) result = unitOfWork.balance.Debit(transaction.amount)
        else if (transaction.type == typesEnum.CREDIT) result = unitOfWork.balance.Credit(transaction.amount)
        else return undefined

        if (!result) return undefined

        var transaction = unitOfWork.transaction.Create(transaction.amount, transaction.type)
        if (!transaction) return undefined

        unitOfWork.Save()
        return transaction
    },
    find: function () {
        return unitOfWork.transaction.FindAllTransactions()
    },
    findOne: function (transactionId) {
        console.log(transactionId)
        return unitOfWork.transaction.FindOne(transactionId)
    }
}

module.exports = TransactionModule