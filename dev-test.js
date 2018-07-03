const Block = require('./block');

const block = new Block("sato", "suzuki", "yamada", "kitagawa");

// console.log(block.toString());
// console.log(Block.genesis().toString());

const fooblock = Block.mineBlock(Block.genesis(),"hoge2");
console.log(fooblock.toString());