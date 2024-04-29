const modalCliente = new bootstrap.Modal(document.getElementById('modalCliente'))

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document,'click','.btnEditar',e=>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innherHTML
    nombre_editar.value = fila.children[1].innherHTML
    apellidos_editar.value = fila.children[2].innherHTML
    direccion_editar.value = fila.children[3].innherHTML


    modalCliente.show()
})