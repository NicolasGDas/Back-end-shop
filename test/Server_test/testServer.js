import {crearServidor} from '../../src/Compartido/servidor/servidor.js'
import { crearApiConf } from '../../src/apiConf.js'
import { crearApiSelect } from '../../src/apiSelect.js'
import axios from 'axios'

const apiSelect = crearApiSelect()
const apiConf = crearApiConf()

const servidor = crearServidor({apiSelect,apiConf})

const port = 3000

await servidor.conectar(port)


console.log("-----------------------Testeando la seleccion de sub-----------------------")
let {data}  = await axios.post(`http://localhost:${port}/selectsub`, { id: '1', sub: '3'})

console.log(data)
console.log('\n')
console.log("-----------------------Testeando la confirmacion de sub-----------------------")
await axios.post(`http://localhost:${port}/confirmsub`, { id: '1', sub: '3' })




await apiConf.cerrar()

await apiSelect.cerrar()

await servidor.desconectar()

