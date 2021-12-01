import { getMode } from "../../config.js";

let daoClientes

switch (getMode()) {
    case 'PROD':
        const {crearMongoClient} = await import('./DB/mongoClient.js')
        const {crearDaoClientesMongoDb} = await import('./DB/daoClientesMongoDb.js')
        const {getCnxStr} = await import('../../config.js')
        const cnxStr = getCnxStr()
        const mongoClient = crearMongoClient(cnxStr)
        const db = await mongoClient.connect()
        const daoClientesMongoDb = crearDaoClientesMongoDb(db)
        daoClientes = daoClientesMongoDb
        break;
        
    default:
        const {crearDaoClientes} = await import('./Interno/Dao_clientes.js')
        const dao_cliente_interno = crearDaoClientes()
        daoClientes = dao_cliente_interno
        break;
}

function getDaoClientes(){
    return daoClientes
}

export default{
    getDaoClientes
}