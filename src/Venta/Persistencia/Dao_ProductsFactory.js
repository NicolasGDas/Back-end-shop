import { getMode } from "../../config.js";

let daoProducts

switch (getMode()) {
    case 'PROD':
        const {crearMongoClient} = await import('./DB/mongoClient.js')
        const {crearDaoProductMongoDb} = await import('./DB/daoProductMongoDb.js')
        const {getCnxStr} = await import('../../config.js')
        const cnxStr = getCnxStr()
        const mongoClient = crearMongoClient(cnxStr)
        const db = await mongoClient.connect()
        const daoProductsMongoDb = crearDaoProductMongoDb(db)
        daoProducts = daoProductsMongoDb
        break;
        
    default:
        const {crearDaoProducts} = await import('./Interno/Dao_Products.js')
        const dao_user_interno = crearDaoProducts()
        daoProducts = dao_user_interno
        break;
}

function getDaoProducts(){
    return daoProducts
}

export default{
    getDaoProducts
}