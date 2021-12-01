export default class Generador_pdf{

    async aPDF(archivo){
        archivo = JSON.stringify(archivo)
        console.log(`convirtiendo a  pdf el archivo ${archivo}`)
        return 'archivo modificado'
    }

}