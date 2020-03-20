const db = require("../data/dbconfig")
const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    db.getRecipes()
        .then(recipes => res.status(200).json(recipes))
})

router.get("/:id/ingredients", (req, res) => {
    db.getShoppingList(req.params.id)
        .then(ingredients => res.status(200).json(ingredients))
})

router.get("/:id/instructions", (req, res) => {
    db.getInstructions(req.params.id)
        .then(instructions => res.status(200).json(instructions))
})

router.get("/instructions", (req,res) => {
    db.getAllInstructions()
        .then(instructions => res.status(200).json(instructions))
})
module.exports = router