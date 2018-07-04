const express = require('express');
const bodyParser = require('body-parser');
const blockChain = require('../blockchain');
const P2pServer = require('./p2p-server');

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();

app.use(bodyParser.json());

const bc = new blockChain();
const p2pServer = new P2pServer(bc);

app.get('/blocks',(req, res) => {
    res.json(bc.chain);
})

app.post('/mine',(req, res) => {
    const block = bc.addBlock(req.body.data);
    console.log(`ブロックが追加されました。${block.toString()}` );
    p2pServer.syncChains();
    res.redirect('/blocks');
})

app.listen(HTTP_PORT, () => console.log(`Listen ${HTTP_PORT}`));

p2pServer.listen();