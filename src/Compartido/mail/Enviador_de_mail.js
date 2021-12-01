export default class Enviar_mail{
    async enviar_mail(mail,archivos_adjuntos){
        console.log(`Enviando mail a ${mail}`)
        if(archivos_adjuntos != null){
            console.log(`con el archivo apendado: ${archivos_adjuntos}`)
        }

    }
}