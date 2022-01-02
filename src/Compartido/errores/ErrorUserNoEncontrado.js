function crearErroruserNoEncontrado() {
    const err = new Error('user no encontrado')
    err.type = 'ERR_CLI_NOT_FOUND'
    return err
}

export { crearErroruserNoEncontrado }