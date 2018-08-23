
exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('test_knex', function(table) {
        table.increments('goal_id').primary();
        table.string('name');
        table.string('description');
        table.integer('duration_in_days');
      })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('test_knex')
  ]);
};
