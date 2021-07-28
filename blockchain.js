// blockchain demo
const SHA256 = require('crypto-js/sha256');

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];

    }
    
    createGenesisBlock(){
        return new Block(0, "28/7/2021", "Genesis Block", "0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock){
        newBlock.prevHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
 
}

class Block{
    constructor(index, timestamp, data, prevHash) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        return SHA256(this.index + this.prevHash + this.timestamp 
            + JSON.stringify(this.data)).toString();
    }
}