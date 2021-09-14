class Account {
    constructor() {
        this.balance = 0;
        this.transactionHistory = [];
    }

    deposit(amount) {
        this.balance += amount;
        this.transactionHistory.push({ "date": "14/09/2021", "amount": amount, "balance": this.balance });
    }
    withdraw(amount) {
        this.balance -= amount;
        this.transactionHistory.push({ "date": "14/09/2021", "amount": -amount, "balance": this.balance })
    }
    getBalance() {
        return this.balance;
    }
    printTransactionHistory() {
        let printOut = "Date || Amount || Balance\n"
        this.transactionHistory.reverse().forEach((transaction) => {
            printOut += `${transaction.date} || ${transaction.amount} || ${transaction.balance}\n`
        })
        return printOut;
    }
}

module.exports = {
    Account
};