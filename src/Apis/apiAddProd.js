import Factory_CU_add_product from "../Venta/Negocio/Caso_de_uso_add_product/Factory_CU_add_product.js";
import Dao_ProductsFactory from "../Venta/Persistencia/Dao_ProductsFactory.js";


function crearApiProd(){
    const apiProd = {
        addProd: async (product)=>{
            const cu_add_prod = Factory_CU_add_product.crearCU_add_prod()
            await cu_add_prod.realizar(product)
        },
        cerrar: async() =>{
            const DaoProduct = Dao_ProductsFactory.getDaoProducts()
            await DaoProduct.cerrar()
        }
    }
    return apiProd
}
export{crearApiProd}