function crearProductDescNotValid() {
    const err = new Error('producto no encontrado')
    err.type = 'ERR_PROD_DESC_NOT_VALID'
    return err
}

export { crearProductDescNotValid }