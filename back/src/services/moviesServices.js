// const {Movie}=require("../models/Movies.js")

// async function getMoviesService(){

//   try{
//      return await Movie.find()
//   } catch(error){
//       throw error 
//   }
    
   
// }

// module.exports={
//     getMoviesService
// }

const { Movie } = require("../models/Movies");

async function createMovieService(movieData) {
  try {
    const newMovie = await Movie.create(movieData);
    return newMovie;
  } catch (error) {
    throw new Error("Error al crear la película en el servicio");
  }
}

module.exports = {
  createMovieService
};