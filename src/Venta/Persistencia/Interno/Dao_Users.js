const users = [
    { id: '1', email: 'mimail' }
]

function crearDaousers() {
    const daousers = {
        getById: (id) => {
        const buscado = users.find(c => c.id == id)
        if (buscado) {
            console.log('user encontrado!')
            return buscado
        } else {
            throw new Error('user no encontrado')
        }
        },
    cerrar: () => {
        console.log('cerrando dao cache... nada por hacer!')
    }
    }
    return daousers
}

export { crearDaousers }