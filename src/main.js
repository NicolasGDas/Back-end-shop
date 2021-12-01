import { crearServidor } from './Compartido/servidor/servidor.js'
import { getPort } from './config.js'
import { crearApiConf } from './apiConf.js'
import { crearApiSelect } from './apiSelect.js'

// creo las apis
const apiSelect = crearApiSelect()
const apiConf = crearApiConf()




const servidor = crearServidor({apiSelect,apiConf})

const port = getPort()


await servidor.conectar(port)
