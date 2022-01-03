import { crearProductNoEncontrado } from '../../../compartido/errores/Product/ErrorProductNoEncontrado.js'

function crearDaoProductMongoDb(db) {

    const dbProduct = db.collection('products')

    return {
        addOneProduct: async(product) =>{
            try{
                await dbProduct.insertOne(product)
            }catch(error){
                console.log(error)
            }
        },

        getById: async (id) => {
            const buscado = await dbProduct.findOne({id: id})
            if (buscado) {
            console.log('Product encontrado!')
            return buscado
            } else {
                throw crearProductNoEncontrado()
            }
        },
        cerrar: async () => {
            console.log('cerrando dao mongo...')
            await db.close()
        }
    }
}

export { crearDaoProductMongoDb }
