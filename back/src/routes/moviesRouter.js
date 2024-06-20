// const { Router } =require("express")
// const { moviesController } = require("../controllers/moviesController")

// const moviesRouter= Router()

// moviesRouter.get("/", moviesController)

// module.exports={
//     moviesRouter
// }
const { Router } = require("express");
const { createMovieController } = require("../controllers/moviesController");

const moviesRouter = Router();

moviesRouter.post("/", createMovieController);

module.exports = {
  moviesRouter
};