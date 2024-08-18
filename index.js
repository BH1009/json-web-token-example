const express = require("express")
const jwt = require("jsonwebtoken")
const logger = require('morgan')
require("dotenv").config()

const secret = process.env.SECRET
const app = express()


app.use(logger('short'))

app.post("/token", (req, res) => {
    const {id: sub, name} = {id: "brayanhdz", name: "brayan hernandez"}
    const token = jwt.sign({
        sub,
        name,
        exp: Date.now() + 60 * 1000
    }, secret)
    res.send({token})
})

app.get("/public", (req, res) => {
    res.send("I'm public")
})

app.get("/private", (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const paylod = jwt.verify(token, secret)
        
        if(Date.now() > paylod.exp){
            return res.status(401).send({error: "Token expired"})
        }
        
        res.send("I'm private")
    } catch (error) {
        res.status(401).send({error: error.message})
    }
})

app.listen(3000, () =>{
    console.log("Server is running on port 3000")
})