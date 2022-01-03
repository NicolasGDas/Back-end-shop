import { crearProductDescNotValid } from "../errores/Product/ErrorProductDescNotValid.js"
import { crearProductNameNotValid } from "../errores/Product/ErrorProductNameNotValid.js"
import { crearProductPriceNotValid } from "../errores/Product/ErrorProductPriceNotValid.js"

export default class Validador{
    constructor(){}

    validarProduct(product){
        if(product.nombre){
            throw crearProductNameNotValid()
        }
        if(product.description){
            throw crearProductDescNotValid()
        }
        if(product.price < 1){
            throw crearProductPriceNotValid()
        }
    }
}