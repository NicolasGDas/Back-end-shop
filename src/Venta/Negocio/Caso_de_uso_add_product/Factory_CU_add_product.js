import Caso_de_uso_add_product from "./Caso_de_uso_add_product.js";
import Validador from "../../../Compartido/validadores/validadorProductosAdd.js";
import DaoProduct from "../../Persistencia/Dao_ProductsFactory.js";

const validator = new Validador()


function crearCU_add_prod(){
    const cu_add_prod = new Caso_de_uso_add_product(
        validator,
        DaoProduct.getDaoProducts()      
    )
    return cu_add_prod
}

export default{crearCU_add_prod}