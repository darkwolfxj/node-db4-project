
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: "butter in grams" },
        { ingredient_name: "milk in cups" },
        { ingredient_name: "flour in cups" }
      ]);
    });
};
