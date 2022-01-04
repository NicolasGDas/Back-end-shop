import {crearServidor} from '../../src/Compartido/servidor/servidor.js';
import { crearApiProd } from '../../src/Apis/apiAddProd.js';
import axios from 'axios';


const apiAddProd = crearApiProd()

const servidor = crearServidor({apiAddProd})

const port = 3000

await servidor.conectar(port)
const cantVisitas = 0
const created_at = Date.now()
const imagenUrl = "test"
let categoria = "Monitores"
let description = "Monitor LG"
let marca = "LG"
let nombre = "Monitor"
let price = 300
let stock = 10

console.log("-----------------Test add prod--------------------")


await axios.post(`http://localhost:${port}/appiAddProd`,
        {
            nombre,
            description,
            price,
            stock,
            marca,
            categoria,
            imagenUrl,
            created_at,
            cantVisitas 
        })

await apiAddProd.cerrar()

await servidor.desconectar()

