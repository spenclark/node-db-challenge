exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      project_name: "San Dieg",
      project_description: "2101",
      completed: 0
    },
    {
      project_name: "San Jose",
      project_description: "92101",
      completed: 0
    },
    {
      project_name: "SF",
      project_description: "101",
      completed: 0
    }
  ]);
}; 