const Products = [
    {
        cantVisitas: 300, 
        categoria: 'Gabinete' , 
        created_at:'created_atParam' ,
        description: 'Testeo interno',
        imagenUrl:'imagenUrlParam',
        marca:'marcaParam',
        nombre:'nombreParam',
        price:'priceParam',
        stock: 'stockParam',
        id : '1'
    },
    {
        cantVisitas: 200, 
        categoria: 'Gabinete2' , 
        created_at:'created_atParam2' ,
        description: 'Testeo interno2',
        imagenUrl:'imagenUrlParam2',
        marca:'marcaParam2',
        nombre:'nombreParam2',
        price:'priceParam2',
        stock: 'stockParam2',
        id : '2'
    },
]

function crearDaoProducts() {
    const daoProducts = {
        getById: (id) => {
        const buscado = Products.find(c => c.id == id)
        if (buscado) {
            console.log('Product encontrado!')
            return buscado
        } else {
            throw new Error('Product no encontrado')
        }
        },
    cerrar: () => {
        console.log('cerrando dao cache... nada por hacer!')
    }
    }
    return daoProducts
}

export { crearDaoProducts }