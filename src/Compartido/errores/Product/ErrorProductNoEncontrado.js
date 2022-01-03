function crearProductNoEncontrado() {
    const err = new Error('producto no encontrado')
    err.type = 'ERR_PROD_NOT_FOUND'
    return err
}

export { crearProductNoEncontrado }