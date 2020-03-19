
exports.up = function(knex) {
    return knex.schema.createTable("recipes", tbl => {
        tbl.increments("recipe_id")
        tbl.string("recipe_name")
            .notNullable()
            .unique()
    }).createTable("instructions", tbl => {
        tbl.increments("step_id")
        tbl.integer("recipe_id")    
            .references("recipe_id")
            .inTable("recipes")
        tbl.float("quantity")
            .notNullable()
        tbl.string("instruction")
            .notNullable()
    }).createTable("ingredients", tbl => {
        tbl.increments("ingredient_id")
        tbl.string("ingredient_name")
            .notNullable()
            .unique()
    }).createTable("recipes_instructions_ingredients", tbl => {
        tbl.integer("recipe_id")
            .references("recipe_id")
            .inTable("recipes")
        tbl.integer("instruction_id")
            .references("step_id")
            .inTable("instructions")
        tbl.integer("ingredient_id")
            .references("ingredient_id")
            .inTable("ingredients")      
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("recipes_instructions_ingredients")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("instructions")
        .dropTableIfExists("recipes")
};
