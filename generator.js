const crypto = require("crypto")
const fs = require("fs")


const secretKey = crypto.randomBytes(32).toString('hex')

// // This code generate a secret key o signature
// console.log(`SECRET=${secretKey}`)

// This code  generate a signature
fs.writeFile('.env', `SECRET=${secretKey}`, (err) => {
    if (err) return console.log(err)

    console.log("File .env and  secret key created")

})
