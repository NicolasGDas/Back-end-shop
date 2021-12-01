import Enviar_mail from "./Enviador_de_mail.js";

function crearMailer(){
    return new Enviar_mail()
}

export default{
    crearMailer
}