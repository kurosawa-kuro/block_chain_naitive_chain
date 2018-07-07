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

    it ('取引署名テスト', () => {
        expect(transaction.input.amount).toEqual(wallet.balance);
    });    

    it ('正常なテストの検証テスト', () => {
        expect(Transaction.verifyTransaction(transaction)).toBe(true);
    });   

    it ('不正なテストの検証テスト', () => {
        transaction.outputs[0].amount = 5555;
        expect(Transaction.verifyTransaction(transaction)).toBe(false);
    });   
});
