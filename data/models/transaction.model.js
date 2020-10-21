
class Transaction {
    constructor() {
        this.transaction = {}
    }
    Create(amount, type) {
        this.transaction = {
            amount,
            type,
            effectiveDate: (new Date()).toString(),
            id: Transaction.transactions.length
        }
        return this.transaction
    }

    FindAllTransactions() {
        return Transaction.transactions
    }

    FindOne(transactionId) {
        console.log(transactionId)
        return Transaction.transactions[transactionId]
    }

    Save() {
        Transaction.transactions.push(this.transaction)
    }
}
Transaction.transactions = []

module.exports = Transaction