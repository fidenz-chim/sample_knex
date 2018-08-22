const didData = require('./data/goal_data');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('t03').del()
    .then(function () {
      // Inserts seed entries
      return knex('t03').insert(didData.goal_data);
    });
};
