const Blockchain = require('./blockchain');
const Block = require('./block');

describe('BlockChain',() =>{
    let bc;
    beforeEach((() =>{
        bc = new Blockchain();
    }));

    it('start genesis block', () =>{
        expect(bc.chain[bc.chain.length - 1]).toEqual(Block.genesis());
    });

    it('add block', () =>{
        const data = "hoge";

        bc.addBlock(data);
        
        expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
    });
})
