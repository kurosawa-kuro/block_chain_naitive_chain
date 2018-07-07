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

    describe ('取引更新テスト', () => {

        let nextAmount, nextRecipient;

        beforeEach(() => {
            nextAmount = 20;
            nextRecipient = 'n32st-13rpi4nt';
            transaction = transaction.update(wallet,nextRecipient,nextAmount);
        })

        it ('取引金額差額テスト', () => {
            expect(transaction.outputs.find(output => output.address === wallet.publicKey).amount).toEqual(wallet.balance - amount - nextAmount);
        }); 

        it ('送信先取引金額テスト', () => {
            expect(transaction.outputs.find(output => output.address === nextRecipient).amount).toEqual(nextAmount);
        }); 
    });  
});
