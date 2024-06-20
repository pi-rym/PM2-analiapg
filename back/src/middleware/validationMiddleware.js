function validateMovieData(req, res, next) {
    const { titulo, director, genero, anio, sinopsis } = req.body;
  
    if (!titulo || !director || !genero || !anio || !sinopsis) {
      return res.status(400).json({
        message: "Todos los campos son obligatorios"
      });
    }
  
    if (isNaN(anio) || anio.toString().length !== 4) {
      return res.status(400).json({
        message: "El año debe ser un número de 4 dígitos"
      });
    }
  
  
  
    next();
  }
  
  module.exports = {
    validateMovieData
  };