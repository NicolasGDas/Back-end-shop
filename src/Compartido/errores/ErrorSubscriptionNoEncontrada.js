function crearErrorSubscriptionNoEncontrada() {
    const err = new Error('subscription no encontrado')
    err.type = 'ERR_SUB_NOT_FOUND'
    return err
}

export { crearErrorSubscriptionNoEncontrada }