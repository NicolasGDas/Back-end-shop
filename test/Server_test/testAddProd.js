import {crearServidor} from '../../src/Compartido/servidor/servidor.js'
import { crearApiProd } from '../../src/apiaddProd.js'
import { crearApiConf } from '../../src/apiConf.js'
import { crearApiSelect } from '../../src/apiSelect.js'
import axios from 'axios'


const apiAddProd = crearApiProd()
const apiSelect = crearApiSelect()
const apiConf = crearApiConf()



// const servidor = crearServidor({apiSelect,apiConf,apiAddProd})
const servidor = crearServidor({apiAddProd})

const port = 3000

await servidor.conectar(port)

console.log("-----------------Test add prod--------------------")
await axios.post(`http://localhost:${port}/appiAddProd`,
    {
        cantVisitas: 10, 
        categoria: "Categoria Test" , 
        created_at:"created_atParam Test" ,
        description: "descriptionParam Test",
        imagenUrl:"imagenUrlParam Test",
        marca:"marcaParam Test",
        nombre:"nombreParam Test",
        price:"priceParam Test",
        stock: "stockParam Test"
    })


await apiAddProd.cerrar()
await servidor.desconectar()