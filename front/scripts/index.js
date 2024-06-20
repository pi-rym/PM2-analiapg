const {transformResponse}=require("./controllerTransResponse.js")
const {failResponse} =require("./controllerFailResponse.js")
const axios = require("axios")

const cardsContainer=document.querySelector("#cardsContainer");


async function getData(){
    try{
        const response= await axios.getAdapter("http://localhost:3000//movies")
        transformResponse(response.data.data)
    }
    catch(error){
        console.log(error)
        failResponse()
    }
}




// const EndPointGetMovies="https://students-api.up.railway.app/movies"


getData()



