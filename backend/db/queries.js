const knex = require('./knex');

module.exports = {
    getAll() {
        return knex('art_card');
    }
}