import { getMode } from "../../config.js";

let daoSub

switch (getMode()) {
    case 'PROD':
        const {crearMongoClient} = await import('./DB/mongoClient.js')
        const {crearDaoSubscription} = await import('./DB/daoSubsMongo.js')
        const {getCnxStr} = await import('../../config.js')
        const cnxStr = getCnxStr()
        const mongoClient = crearMongoClient(cnxStr)
        const db = await mongoClient.connect()
        const daoSubMongoDb = crearDaoSubscription(db)
        daoSub = daoSubMongoDb
        break;
        
    default:
        const {crearDaoSub} = await import('./Interno/Dao_subscription.js')
        const dao_sub_interno = crearDaoSub()
        daoSub = dao_sub_interno
        break;
}

function getDaoSub(){
    return daoSub
}

export default{
    getDaoSub
}