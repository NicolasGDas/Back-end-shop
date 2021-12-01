import {obtener_datos} from '../../../Compartido/lector_datos/obtener_datos.js'

const datos_sub = await obtener_datos("subscripcion")


function crearDaoSub() {
    const daoSubscriptions = {
        getById: (id) => {
        let retorno = []
        const buscado = datos_sub.find(s => s["id"] == id)
        if (buscado) {
            retorno = [{
                title: buscado["meses"],
                unit_price: buscado["precio"],
                quantity: 1
            }]
            console.log('Subscription encontrado!')
            return retorno
        } else {
            throw new Error('Subscription no encontrado')
        }
        },
        cerrar: () => {
            console.log('cerrando dao cache... nada por hacer!')
        }
    }
    return daoSubscriptions
}
    

export { crearDaoSub }