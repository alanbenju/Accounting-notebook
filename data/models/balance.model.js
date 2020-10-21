
class Balance {
    constructor(){
        this.amount = Balance.amount
    }

    Find(){
        return {
            amount: this.amount
        }
    }

    Save(){
        Balance.amount = this.amount
    }

    Debit(amount){
        if (this.amount < amount) return false
        this.amount -= amount
        return true
    }

    Credit(value){
        this.amount += value
        return true
    }
}

Balance.amount = 0

module.exports = Balance

