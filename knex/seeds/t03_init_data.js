const didData = require('./data/t03_data');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('test_knex').del()
    .then(function () {
      // Inserts seed entries
      return knex('test_knex').insert(didData.t03_data);
    });
};
