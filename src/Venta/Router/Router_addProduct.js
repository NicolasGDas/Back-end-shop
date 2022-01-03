import express from 'express'



function createRouterAddProduct(apiaddProd){
    const router = express.Router()

    router.post('/',async(req,res,next)=>{
        try{
            
            await apiaddProd.addProd(req.body)
            res.json({msj: "Producto agregado"})
        }catch(err){
            next(err)
        }
    })

    router.use((err,req,res,next)=>{
        if(err.type == 'ERR_PROD_NOT_FOUND'){
            res.status(404)
        }else if (err.type == 'ERR_PROD_NAME_NOT_VALID'){
            res.status(400)
        }else if (err.type == 'ERR_PROD_DESC_NOT_VALID'){
            res.status(400)
        }else if (err.type == 'ERR_PROD_PRICE_NOT_VALID'){
            res.status(400)
        }else{
            res.status(500)
        }
    })
    return router

}

export{createRouterAddProduct}