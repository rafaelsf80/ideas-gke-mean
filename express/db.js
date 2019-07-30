let mongoose = require('mongoose')

let mongoDBUrl = 'mongodb://104.155.95.217/aepi'

mongoose.connect(mongoDBUrl,  { useNewUrlParser: true })

let connection = mongoose.connection
connection.on('error', (error) => {
    console.error(error)
})
