class Block{
    constructor(timestamp, lastHash, hash, data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString(){
        return `Block
            Timestamp = ${this.timestamp};
            LastHash = ${this.lastHash.substring(0,10)};
            hash = ${this.hash.substring(0,10)};
            data = ${this.data};
        `
    }

    static genesis(){
        return new this("timestamp","-----","x1x2x3x4",[]);
    }

    static mineBlock(lastBlock, data){
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = "fixme-hash";

        return new Block(timestamp, lastHash, hash, data);
    }
}

module.exports = Block;
