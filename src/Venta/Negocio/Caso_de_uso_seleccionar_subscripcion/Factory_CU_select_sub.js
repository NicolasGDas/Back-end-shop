import Caso_de_uso_seleccionar_subscripcion from "./Caso_de_uso_seleccionar_subscripcion.js";
import cliente_mp from '../../Modulos/Mercado_pago.js'
import {obtener_datos} from '../../../Compartido/lector_datos/obtener_datos.js'
import DaoFactory from "../../../Venta/Persistencia/Dao_UsersFactory.js"
import Dao_SubFactory from "../../Persistencia/Dao_SubFactory.js";


const datos_vendedor = await obtener_datos("vendedor")
const token_vendedor = datos_vendedor["credentials"]["production"]["token"]
const vendedor = new cliente_mp(token_vendedor)


function crearCU_select_subscription(){
    const cu_confirm_sub = new Caso_de_uso_seleccionar_subscripcion(
        DaoFactory.getDaoUsers(),
        vendedor,
        Dao_SubFactory.getDaoSub()
    )
    return cu_confirm_sub
}

export default {
    crearCU_select_subscription
}
