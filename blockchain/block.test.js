const Block = require('./block');
const { DIFFICULTY } = require('../config');

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

    it('指定難易度のハッシュ値生成テスト', () =>{
        expect(block.hash.substring(0,DIFFICULTY)).toEqual('0'.repeat(DIFFICULTY));
        console.log(block.toString());
    });
})
