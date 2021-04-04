const express = require('express')
const mongooose = require('mongoose')
const url = 'test'
const app = express()
app.use(express.json())

mongooose.connect(url, { useNewUrlParser: true})
const con = mongooose.connection

con.once('open', function (){
    console.log("connection...")
})
con.on('error', function (){
    console.log("No connection...")
})

const appleRouter = require('./routes/Apple.js')
app.use('/AppleDBex', appleRouter)

app.listen('9000', () =>{
    console.log("Server has Started")
})