
//getRecipes(): should return a list of all recipes in the database.
//getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
//getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe
const db = require("../knexconfig")

const getRecipes = () => {
    return db("recipes")
}

const getShoppingList = (recipe_id) => {
   return db("recipes")
    .select("ingredient_name") 
    .from("recipes")   
    .join("connection_table", "recipes.recipe_id", "=", "connection_table.recipe_id")
    .join("ingredients", "connection_table.ingredient_id", "=", "ingredients.ingredient_id")
    .where("recipes.recipe_id", "=", `${ recipe_id }`)
}

const getInstructions = (recipe_id) => {
    return db("recipes")
        .select("instruction") 
        .from("recipes")   
        .join("connection_table", "recipes.recipe_id", "=", "connection_table.recipe_id")
        .join("instructions", "connection_table.step_id", "=", "instructions.step_id")
        .where("recipes.recipe_id", "=", `${ recipe_id }`)
}

// const getAllInstructions = () => {
//     return db("instructions")
// }

const getAllRecipesByIngredient = (ingredient_id) => {
    return db("ingredients")
        .select("recipe_name")
        .from("ingredients")
        .join("connection_table", "ingredients.ingredient_id", "=", "connection_table.ingredient_id")
        .join("recipes", "connection_table.recipe_id", "=", "recipes.recipe_id")
        .where("ingredients.ingredient_id", "=", `${ ingredient_id }`)
}
module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    // getAllInstructions,
    getAllRecipesByIngredient    
   } 