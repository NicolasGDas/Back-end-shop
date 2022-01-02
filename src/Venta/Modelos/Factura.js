export default class Factura {
    constructor(id_sub,datos_user) {
        this.client     = datos_user
        this.producto   = id_sub
        console.log('factura creada!')
    }
}