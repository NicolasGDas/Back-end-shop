function crearProductPriceNotValid() {
    const err = new Error('producto no encontrado')
    err.type = 'ERR_PROD_PRICE_NOT_VALID'
    return err
}

export { crearProductPriceNotValid }