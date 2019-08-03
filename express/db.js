let mongoose = require('mongoose')

let mongoDBUrl = 'mongodb://34.76.23.144/aepi'

mongoose.connect(mongoDBUrl,  { useNewUrlParser: true })

let connection = mongoose.connection
connection.on('error', (error) => {
    console.error(error)
})
