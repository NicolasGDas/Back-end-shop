import Factory_CU_confirmar_sub from "./Venta/Negocio/Caso_de_uso_confirmar_subscripcion/Factory_CU_confirmar_sub.js";
import Dao_ClientesFactory from "./Venta/Persistencia/Dao_ClientesFactory.js";


function crearApiConf(){

    const apiConf = {
        
        confirmarSub: async (datosConf) =>{
            const cu_conf_sub = Factory_CU_confirmar_sub.crearCU_confirmar_subscription()
            await cu_conf_sub.realizar(datosConf)
        },
        cerrar: async() =>{
            
            const daoClientes = Dao_ClientesFactory.getDaoClientes()
            
            await daoClientes.cerrar()

        }
    }
    return apiConf
}

export{crearApiConf}