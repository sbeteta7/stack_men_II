const Cliente = require('../model/Cliente')

//Mostrar
module.exports.mostrar = (req, res)=>{
    Cliente.find({}, (error, clientes)=>{
        if(error){
             return res.status(500).json(
                {message: 'Error mostrando los clientes'}
            )
            }
        return res.render('clientes', {clientes: clientes})
    })
}

//Crear
module.exports.crear = (req, res)=>{
    const cliente = new Cliente({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion
    })
    cliente.save((error, cliente)=>{
        if(error){
            return res.status(500).json(
                {message: 'Error al guardar el cliente'}
            )
        }
        return res.status(201).json(
            {message: 'Cliente guardado', cliente: cliente}
        )
    })
}

//Editar
module.exports.editar = (req, res) => {
    const id = req.body.id_editar.trim();
    const nombre = req.body.nombre_editar;
    const apellidos = req.body.apellidos_editar;
    const direccion = req.body.direccion_editar;

    Cliente.findByIdAndUpdate(id, {nombre, apellidos, direccion},(error, cliente)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error actualizando al Cliente',
                error: error.message
            });
        }
        res.redirect('/')
    });
};

//Borrar

module.exports.borrar = (req, res)=>{
    const id= req.params.id
    Cliente.findByIdAndRemove(id,(error,cliente)=>{
        if(error){
            return res.status(500).json({
                message:'Error eliminado al Cliente'
            })
        }
        res.redirect('/')
    })
}
