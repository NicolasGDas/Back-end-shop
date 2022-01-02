import Factura from '../../Modelos/Factura.js'

export default class Caso_de_uso_confirmar_subscripcion{
    constructor(dao_users,generador_PDF,enviador_de_mails){
        this.dao_users       = dao_users,
        this.generar_PDF        = generador_PDF,
        this.enviador_de_mails  = enviador_de_mails
    }

    async realizar(param){
        
        const datos_user = await this.dao_users.getById(param.id)  
        const factura       = new Factura(param.sub,datos_user)
        const PDF           = await this.generar_PDF.aPDF(factura)
        await this.enviador_de_mails.enviar_mail(datos_user["email"],PDF)
        
        }
}