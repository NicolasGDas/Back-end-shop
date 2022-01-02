

export default class Caso_de_uso_seleccionar_subscripcion{
    constructor(dao_users,vendedor,subscipcion){
        this.dao_users= dao_users,
        this.vendedor= vendedor,
        this.subscipcion = subscipcion
    }


    async realizar(param){
        
        const user                    = await this.dao_users.getById(param.id)
        const subscription_deseada       = await this.subscipcion.getById(param.sub)
        const {init_point:link_pago}     = await this.vendedor.crear_venta(subscription_deseada,user.id)
        // const link_pago             = venta["init_point"]
        return link_pago
        
    }
}
// realmente el link de pago ya existe dentro de la respuesta, es un campo que se llama init point. Lo pongo asi porque p
// prefiero que el metodo de venta me devuelva el objeto entero, ya que si lo quiero usar en otro cu o de otra manera en otro lado
// puesdo tener la respuesta entera de mp