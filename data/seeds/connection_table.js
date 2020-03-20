
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('connection_table').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('connection_table').insert([
        { recipe_id: 1, step_id: 1, ingredient_id: 1 },
        { recipe_id: 1, step_id: 2, ingredient_id: 2 },
        { recipe_id: 1, step_id: 3, ingredient_id: 3 }

      ]);
    });
};
