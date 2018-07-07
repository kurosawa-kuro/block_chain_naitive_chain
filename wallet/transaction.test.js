const Transaction = require('./Transaction');
const Wallet = require('./index');

describe('Transaction', ()=> {

    let transaction, wallet, recipient, amount;

    beforeEach(() => {
        wallet = new Wallet();
        amount =50;
        recipient = 'r2c1e0p24nt';
        transaction = Transaction.newTransaction(wallet, recipient, amount);
    })

    it ('残高差し引きテスト', () => {
        expect(transaction.outputs.find(output => output.address === wallet.publicKey).amount).toEqual(wallet.balance - amount);
    });

    it ('送金テスト', () => {
        expect(transaction.outputs.find(output => output.address === recipient).amount).toEqual(amount);
    });
});
