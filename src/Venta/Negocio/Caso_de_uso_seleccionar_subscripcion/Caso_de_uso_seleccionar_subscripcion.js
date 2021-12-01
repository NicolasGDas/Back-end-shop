

export default class Caso_de_uso_seleccionar_subscripcion{
    constructor(dao_clientes,vendedor,subscipcion){
        this.dao_clientes= dao_clientes,
        this.vendedor= vendedor,
        this.subscipcion = subscipcion
    }


    async realizar(param){
        
        const cliente                    = await this.dao_clientes.getById(param.id)
        const subscription_deseada       = await this.subscipcion.getById(param.sub)
        const {init_point:link_pago}     = await this.vendedor.crear_venta(subscription_deseada,cliente.id)
        // const link_pago             = venta["init_point"]
        return link_pago
        
    }
}
// realmente el link de pago ya existe dentro de la respuesta, es un campo que se llama init point. Lo pongo asi porque p
// prefiero que el metodo de venta me devuelva el objeto entero, ya que si lo quiero usar en otro cu o de otra manera en otro lado
// puesdo tener la respuesta entera de mp