const express = require('express')
const app = express()

const db = require('./db')

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))


// Importa el enrutador de clientes
const clientesRouter = require('./routes/clientes');
// Usa el enrutador de clientes
app.use('/', clientesRouter);

app.listen(4000, () => {
    console.log('!Server up! en http://localhost:4000')
    })