import dotenv from 'dotenv'
dotenv.config()

const getPort = () => process.env.PORT || 3000
const getCnxStr = () => process.env.CNX_STR
const getMode = () => process.env.MODE || 'PROD'

export {
    getCnxStr, getMode, getPort
}