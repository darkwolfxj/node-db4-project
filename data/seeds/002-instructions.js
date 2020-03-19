
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("instructions").insert([
        { recipe_id: 1, instruction: "test instruction step 1", quantity: 1 },
        { recipe_id: 1, instruction: "test instruction step 2", quantity: 1 },
        { recipe_id: 1, instruction: "test instruction step 3", quantity: 1 }
      ]);
    });
};
