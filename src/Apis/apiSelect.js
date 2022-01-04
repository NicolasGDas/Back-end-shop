import Factory_CU_seleccionar_sub from "./Venta/Negocio/Caso_de_uso_seleccionar_subscripcion/Factory_CU_select_sub.js"
import Dao_usersFactory from "./Venta/Persistencia/Dao_UsersFactory.js";
import Dao_SubFactory from './Venta/Persistencia/Dao_SubFactory.js'

function crearApiSelect(){

    const apiSelect ={
        
        seleccionarSelect: async (datosSelect) =>{
            const cu_Select_Select = Factory_CU_seleccionar_sub.crearCU_select_subscription()
            return await cu_Select_Select.realizar(datosSelect)
        },
        cerrar: async() =>{
            const daousers = Dao_usersFactory.getDaoUsers()
            const daoSubs = Dao_SubFactory.getDaoSub()

            await daousers.cerrar()
            await daoSubs.cerrar()
        }
    }
    return apiSelect
}


export {crearApiSelect}