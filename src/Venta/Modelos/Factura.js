export default class Factura {
    constructor(id_sub,datos_cliente) {
        this.client     = datos_cliente
        this.producto   = id_sub
        console.log('factura creada!')
    }
}