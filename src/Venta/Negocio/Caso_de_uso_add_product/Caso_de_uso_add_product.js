

export default class Caso_de_uso_add_product{
    constructor(validador,dao_products){
        this.validador      = validador
        this.dao_products   = dao_products
    }

    async realizar(product){
        //validar datos
        //this.validador.validarProduct(product)
        //agregarlos a la db
        await this.dao_products.addOneProduct(product)
        }
}