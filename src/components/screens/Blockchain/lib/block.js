import sha256 from "crypto-js/sha256";

export class Block {
  constructor(prevHash, index, data, hash = 0) {
    this.prevHash = prevHash;
    this.index = index;
    this.nonce = 0;
    this.timeStamp = Date.now();
    this.data = data;
    this.hash = hash;
    this.error = false;
    this.transactions = [];
    this.mined = false;
  }

  recalculateHash() {
    this.hash = sha256(
      this.nonce + this.transactions + this.index + this.prevHash
    ).toString();
    return sha256(
      this.nonce + this.data + this.index + this.prevHash
    ).toString();
  }
}
