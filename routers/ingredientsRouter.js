const db = require("../data/dbconfig")
const express = require("express")
const router = express.Router()

router.get("/:id/recipes", (req, res) => {
    db.getAllRecipesByIngredient(req.params.id)
        .then(recipes => res.status(200).json(recipes))
})

module.exports = router