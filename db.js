const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1/data'; // Especifica la dirección IPv4 local

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar MongoDB:'))
db.once('open',function callback(){
    console.log('Conectado a MongoDB')
})

module.exports = db