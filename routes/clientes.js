const express = require('express')
const router = express.Router()

const clienteController = require('../controllers/clienteController')

router.get('/', clienteController.mostrar)

//Crear cliente

router.post('/crear', clienteController.crear)

//Editar alumno (POST)
router.post('/editar', clienteController.editar)

//Borrar cliente (GET)
router.get('/borrar/:id',clienteController.borrar)
module.exports = router

