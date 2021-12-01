import express from 'express'



function createRouterConfirm(apiConf){
    const router = express.Router()
    
    router.post('/',  async (req, res, next) =>{
        try{
            await apiConf.confirmarSub(req.body)
            res.json({msj: 'Sub confirmada'})
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


export {createRouterConfirm}