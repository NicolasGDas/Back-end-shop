import { crearErrorClienteNoEncontrado } from '../../../compartido/errores/ErrorClienteNoEncontrado.js'

function crearDaoClientesMongoDb(db) {

    const dbClientes = db.collection('clientes')

    return {
        getById: async (id) => {
            const buscado = await dbClientes.findOne({id: id})
            if (buscado) {
            console.log('cliente encontrado!')
            return buscado
            } else {
                throw crearErrorClienteNoEncontrado()
            }
        },
        cerrar: async () => {
            console.log('cerrando dao mongo...')
            await db.close()
        }
    }
}

export { crearDaoClientesMongoDb }
