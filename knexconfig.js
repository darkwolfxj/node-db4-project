const knex = require("knex")
const knexfile = require("./knexfile")
const knexconfig = knex(knexfile.development)

module.exports = knexconfig