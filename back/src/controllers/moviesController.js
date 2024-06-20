// const {getMoviesService}=require("../services/moviesServices")


//  async function moviesController(req,res){
//     try{
//         const movies= await getMoviesService()

//         res.status(200).json({
//             message:"Movies Data",
//             data:movies
//         })

//     }catch(error){
      
//         res.status(500).json({
//             message:"Error ",
//             data:error
//         })
//     }

 
// }
// module.exports={
//     moviesController
// }

const { createMovieService } = require("../services/moviesServices");

async function createMovieController(req, res) {
  const { titulo, director, genero, anio, sinopsis } = req.body;

  try {
  
    const newMovie = await createMovieService({ titulo, director, genero, anio, sinopsis });

    res.status(201).json({
      message: "Película creada correctamente",
      data: newMovie
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al crear la película",
      error: error.message
    });
  }
}

module.exports = {
  createMovieController
};