const Block = require('./block');

describe('Block',() =>{

    let data, lastBlock, block;
    
    beforeEach((() =>{
        data = "sato";
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    }));

    it('date test', () =>{
        expect(block.data).toEqual(data);
    });

    it('hash test', () =>{
        expect(block.lastHash).toEqual(lastBlock.hash);
    });
})
