const { Account } = require('./index.js');

test('when we deposit 50, our balance is 50', () => {
    let newAccount = new Account();
    newAccount.deposit(50);
    expect(newAccount.getBalance()).toEqual(50);
})

test('when we withdraw 50, our balance is 50', () => {
    let newAccount = new Account();
    newAccount.deposit(100);
    newAccount.withdraw(50);
    expect(newAccount.getBalance()).toEqual(50);
})

test('when we deposit 50, a new element gets added to the transaction history', () => {
    let newAccount = new Account();
    newAccount.deposit(1000);
    expect(newAccount.transactionHistory[0]).toEqual({ "date": "14/09/2021", "amount": 1000, "balance": 1000 })
});

test('when we withdraw 500, a new element gets added to the transaction history', () => {
    let newAccount = new Account();
    newAccount.deposit(1000);
    newAccount.withdraw(500);
    expect(newAccount.transactionHistory[1]).toEqual({ "date": "14/09/2021", "amount": -500, "balance": 500 })
});

test('when we deposit 1000, and withdraw 500, we expect the transaction history to be printed', () => {
    let newAccount = new Account();
    newAccount.deposit(1000);
    newAccount.withdraw(500);
    expect(newAccount.printTransactionHistory()).toBe("Date || Amount || Balance\n14/09/2021 || -500 || 500\n14/09/2021 || 1000 || 1000\n")
})