import Factory_CU_confirmar_sub from "./Venta/Negocio/Caso_de_uso_confirmar_subscripcion/Factory_CU_confirmar_sub.js";
import Dao_usersFactory from "./Venta/Persistencia/Dao_UsersFactory.js";


function crearApiConf(){

    const apiConf = {
        
        confirmarSub: async (datosConf) =>{
            const cu_conf_sub = Factory_CU_confirmar_sub.crearCU_confirmar_subscription()
            await cu_conf_sub.realizar(datosConf)
        },
        cerrar: async() =>{
            
            const daousers = Dao_usersFactory.getDaoUsers()
            
            await daousers.cerrar()

        }
    }
    return apiConf
}

export{crearApiConf}