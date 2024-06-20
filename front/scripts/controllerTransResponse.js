const {appendHtmlToDom}=require("./controllerAppend.js")


function transformResponse(response) {
  response.forEach((movie, index) => {
    movie.id = index + 1;
    switch (movie.id) {
      case 1:
        movie.background =
          "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg";
        break;
      case 2:
        movie.background =
          "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg";
        break;
      case 3:
        movie.background =
          "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg";
      default:
        break;
    }
  });
  appendHtmlToDom(response);
}

module.exports ={
    transformResponse
}