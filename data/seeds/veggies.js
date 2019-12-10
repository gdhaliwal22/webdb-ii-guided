exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("veggies")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("veggies").insert([{ name: "" }, { name: "" }, { name: "" }]);
    });
};
