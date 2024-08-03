const crypto = require("crypto")

const prefixHash = (prefix, message) => {
    let nonce = 0;
    while(true) {
        const cur = nonce.toString() + message.toString();
        const hash = crypto.createHash('sha256').update(cur).digest('hex');
        
        console.log("Current hash - ", hash, " | Nonce - ", nonce);
        if(hash.startsWith(prefix)) return hash
        nonce++
    }
}

const resHash = prefixHash('000', 'ag sent 100 USDC to vitalik')
console.log("Hash - ", resHash)