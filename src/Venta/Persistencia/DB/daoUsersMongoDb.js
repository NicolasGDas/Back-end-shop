import { crearErroruserNoEncontrado } from '../../../compartido/errores/ErrorUserNoEncontrado.js'

function crearDaoUsersMongoDb(db) {

    const dbusers = db.collection('users')

    return {
        getById: async (id) => {
            const buscado = await dbusers.findOne({id: id})
            if (buscado) {
            console.log('user encontrado!')
            return buscado
            } else {
                throw crearErroruserNoEncontrado()
            }
        },
        cerrar: async () => {
            console.log('cerrando dao mongo...')
            await db.close()
        }
    }
}

export { crearDaoUsersMongoDb }
