import { promises as fs } from 'fs'

async function obtener_datos(usuario_requerido){

        let datos = JSON.parse(await fs.readFile(`../Entrega_3/src/Venta/Persistencia/Interno/Documentos/${usuario_requerido}.json`))
        return datos
        
}
export{obtener_datos}


