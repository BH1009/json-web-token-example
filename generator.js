const crypto = require("crypto")

const secretKey = crypto.randomBytes(32).toString('hex')

// This code generate a secret key o signature
console.log(`SECRET=${secretKey}`)
