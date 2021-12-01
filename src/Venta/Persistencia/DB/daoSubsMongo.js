import { crearErrorSubscriptionNoEncontrada } from '../../../compartido/errores/ErrorSubscriptionNoEncontrada.js'

function crearDaoSubscription(db) {

    const dbSub = db.collection('suscriptions')
    let retorno = []

    return {
        getById: async (id) => {
            const buscado = await dbSub.findOne({id: id})
            if (buscado) {
            console.log('Subscription encontrada!')
            retorno = [{
                title: buscado["meses"],
                unit_price: parseInt(buscado["precio"]),
                quantity: 1
            }]
            return retorno
            } else {
                throw crearErrorSubscriptionNoEncontrada()
            }
        },
        cerrar: async () => {
            console.log('cerrando dao mongo...')
            await db.close()
        }
    }
}

export { crearDaoSubscription }
