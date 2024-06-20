const { Router } =require("express")
const { moviesRouter } = require("./moviesRouter")


const router= Router()

router.get("/",(req,res)=>{
    res.status(200).send("todo bien")
})

router.use("/movies",moviesRouter)

module.exports={
    router
}