
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_instructions_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_instructions_ingredients').insert([
        { recipe_id: 1, instruction_id: 1, ingredient_id: 1}  
      ]);
    });
};
