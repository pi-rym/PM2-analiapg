const mongoose =require("mongoose")

const movieObjet={
    title:{
        type:String,
        required:[true,'Titulo Obligatorio']
    },
    yaer:{
        type:Number
    },
    director:{
        type:String
    },
    genre:{
        type:[String]
    },
    poster:{
        type:String
    }


}
const  movieSchema=mongoose.Schema(movieObjet)

const Movie=mongoose.model("Movie",movieSchema)

module.exports={
    Movie
}