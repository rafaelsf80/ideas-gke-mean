let mongoose = require('mongoose')

//let mongoDBUrl = 'mongodb://34.76.23.144/aepi'

console.log("Getting process vars: " + process.env.DB_TYPE + " " + process.env.MONGO_DB_URL)

var mongoDBUrl = process.env.MONGO_DB_URL

if (mongoDBUrl)
    mongoose.connect(mongoDBUrl,  { useNewUrlParser: true })
else 
    console.log('mongoDBUrl is null. Can not connect !!!');

let connection = mongoose.connection
connection.on('error', (error) => {
    console.error(error)
})
