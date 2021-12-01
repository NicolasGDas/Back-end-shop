import mercadopago from "mercadopago";



export default class Cliente_mp{
    constructor(token){
        mercadopago.configure({
            access_token: token
        })
    }
    //methods
    async crear_venta(productos,clienteId){
            //no esta vacio el array de productos
            const preference = {
                external_reference: clienteId,
                items: productos
            };
            const respuesta = await mercadopago.preferences.create(preference)
            
        return respuesta.body
    }

}