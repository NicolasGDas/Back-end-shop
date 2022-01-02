import { getMode } from "../../config.js";

let daoUsers

switch (getMode()) {
    case 'PROD':
        const {crearMongoClient} = await import('./DB/mongoClient.js')
        const {crearDaoUsersMongoDb} = await import('./DB/daoUsersMongoDb.js')
        const {getCnxStr} = await import('../../config.js')
        const cnxStr = getCnxStr()
        const mongoClient = crearMongoClient(cnxStr)
        const db = await mongoClient.connect()
        const daoUsersMongoDb = crearDaoUsersMongoDb(db)
        daoUsers = daoUsersMongoDb
        break;
        
    default:
        const {crearDaoUsers} = await import('./Interno/Dao_users.js')
        const dao_user_interno = crearDaoUsers()
        daoUsers = dao_user_interno
        break;
}

function getDaoUsers(){
    return daoUsers
}

export default{
    getDaoUsers
}