const crypto = require("crypto")
const fs = require("fs")

// This code generate a secret key o signature
const secretKey = crypto.randomBytes(32).toString('hex')

// This code  generate a .env file and write the secret key inside
fs.writeFile('.env', `SECRET=${secretKey}`, (err) => {
    if (err) return console.log(err)

    console.log("File .env and  secret key created")

})
