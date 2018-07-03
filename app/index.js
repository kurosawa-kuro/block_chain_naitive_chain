const express = require('express');
const bodyParser = require('body-parser');
const BlockChain = require('../blockchain');

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();

app.use(bodyParser.json());

const bc = new BlockChain();

app.get('/blocks',(req, res) => {
    res.json(bc.chain);
})

app.post('/mine',(req, res) => {
    const block = bc.addBlock(req.body.data);
    console.log(`ブロックが追加されました。${block.toString()}` );
    
    res.redirect('/blocks');
})

app.listen(HTTP_PORT, () => console.log(`Listen ${HTTP_PORT}`));
