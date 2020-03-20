const express = require("express")
const server = express()
const recipeRouter = require("../routers/recipeRouter")
const ingredientsRouter = require("../routers/ingredientsRouter")

server.use(express.json())
server.use("/api/recipes", recipeRouter)
server.use("/api/ingredients", ingredientsRouter)
module.exports = server