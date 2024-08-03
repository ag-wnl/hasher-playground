const crypto = require("crypto")

const hashWithPrefix = (difficulty, message) => {
    const prefix = "0".repeat(difficulty)

    let nonce = 0;
    while(true) {
        const cur = nonce.toString() + message.toString();
        const hash = crypto.createHash('sha256').update(cur).digest('hex');
        
        console.log("Current hash - ", hash, " | Nonce - ", nonce);
        if(hash.startsWith(prefix)) return {hash: hash, nonce: nonce}
        nonce++
    }
}

const resHash = hashWithPrefix(5, 'ag sent 100 USDC to vitalik')
console.log("Mined successfully : ", resHash)