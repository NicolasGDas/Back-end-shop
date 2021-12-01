const clientes = [
    { id: '1', email: 'mimail' }
]

function crearDaoClientes() {
    const daoClientes = {
        getById: (id) => {
        const buscado = clientes.find(c => c.id == id)
        if (buscado) {
            console.log('cliente encontrado!')
            return buscado
        } else {
            throw new Error('cliente no encontrado')
        }
        },
    cerrar: () => {
        console.log('cerrando dao cache... nada por hacer!')
    }
    }
    return daoClientes
}

export { crearDaoClientes }