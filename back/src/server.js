//  const express=require("express")
//  const { router }=require("./routes/index.js")
//  const morgan=require("morgan")
//  const cors= require("cors")


//  const app = express()
//  app.use(morgan("dev"))
//  app.use(cors())
//  app.use(express.json())


//  app.use(router)

// module.exports={
//     app
//   }

const express = require("express");
const { moviesRouter } = require("./routes/moviesRouter");
const morgan = require("morgan");
const cors = require("cors");
const { validateMovieData } = require("./middleware/validationMiddleware");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Rutas
app.use("/movies", validateMovieData, moviesRouter);

module.exports = {
  app
};