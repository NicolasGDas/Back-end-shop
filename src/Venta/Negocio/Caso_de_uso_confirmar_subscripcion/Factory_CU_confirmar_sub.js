import Caso_de_uso_confirmar_subscripcion from "./Caso_de_uso_confirmar_subscripcion.js";
import MailerFactory from '../../../Compartido/mail/MailFactory.js'
import PdfFactory from "../../../Compartido/pdf/PdfFactory.js";
import DaoFactory from "../../../Venta/Persistencia/Dao_UsersFactory.js"







function crearCU_confirmar_subscription(){
    const cu_confirm_sub = new Caso_de_uso_confirmar_subscripcion(
        DaoFactory.getDaoUsers(),
        PdfFactory.crearPDF(),
        MailerFactory.crearMailer()
    )
    return cu_confirm_sub
}

export default {
    crearCU_confirmar_subscription
}