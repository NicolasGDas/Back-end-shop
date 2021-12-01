import express from 'express'

function createRouterSelect(apiSelect){
    const router = express.Router()

    router.post('/',  async (req, res, next)=>{
        try{
            let link = await apiSelect.seleccionarSelect(req.body) 
            res.json({msj: `link: ${link}`})
        }catch(err){
            next(err)
        }
    })
    router.use((err,req,res,next)=>{
        if(err.type == 'ERR_CLI_NOT_FOUND'){
            res.status(404)
        }else if(err.type == 'ERR_SUB_NOT_FOUND'){
            res.status(404)
        }else{
            res.status(500)
        }
        res.json({msg: err.message})
    })
    return router
}

export {createRouterSelect}