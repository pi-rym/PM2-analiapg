 
 const { app }=require("./src/server.js")
 const {dbConnect}=require("./src/config/dbConfig.js")

 const PORT=3000
 dbConnect()
   .then (()=>{
    app.listen(PORT,( )=>{
        console.log(`Server listen on port ${PORT}`)
    })
   })
   .catch((err)=>{
    console.error(err)
   })


