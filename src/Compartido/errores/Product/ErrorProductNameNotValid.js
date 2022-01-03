function crearProductNameNotValid() {
    const err = new Error('producto no encontrado')
    err.type = 'ERR_PROD_NAME_NOT_VALID'
    return err
}

export { crearProductNameNotValid }