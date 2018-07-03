const express = require('express');
const BlockChain = require('../blockchain');

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();
const bc = new BlockChain();

app.get('/blocks',(req, res) => {
    res.json(bc.chain);
})

app.listen(HTTP_PORT, () => console.log(`Listen ${HTTP_PORT}`));
