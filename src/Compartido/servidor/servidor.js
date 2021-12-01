import express from 'express'
import {createRouterSelect} from '../../Venta/Router/Router_select.js'
import {createRouterConfirm} from '../../Venta/Router/Router_confirm.js'
//rutas

function crearServidor({apiSelect,apiConf}) {

    const app = express()

    app.use(express.json())

    app.use('/selectsub', createRouterSelect(apiSelect))
    app.use('/confirmsub', createRouterConfirm(apiConf))

    let server = null

    return {
        conectar: (port) => {
        return new Promise((resolve, reject) => {
            if (server) {
            reject(new Error('servidor ya conectado'))
            } else {
            server = app.listen(port, () => {
                console.log(`todo bien, conectado en puerto ${server.address().port}`)
                resolve()
            })
            server.on('error', (err) => {
                reject(err)
            })
            }
        })
    },
    desconectar: () => {
        return new Promise((resolve, reject) => {
            server.close((err) => {
            if (err) {
                reject(err)
            } else {
                server = null
                resolve()
            }
            })
        })
        }
    }
}

export { crearServidor }