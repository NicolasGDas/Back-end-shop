import Factory_cu_select from "../src/Casos_de_uso/Caso_de_uso_seleccionar_subscripcion/Factory_CU_select_sub.js";
import Factory_cu_confirm from "../src/Casos_de_uso/Caso_de_uso_confirmar_subscripcion/Factory_CU_confirmar_sub.js"


const cu_select_sub = Factory_cu_select.crearCU_select_subscription()
cu_select_sub.realizar("3 meses")

const cu_confirm_sub = Factory_cu_confirm.crearCU_confirmar_subscription()
cu_confirm_sub.realizar("1","3")