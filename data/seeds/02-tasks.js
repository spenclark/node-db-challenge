exports.seed = function(knex, Promise) {
  return knex("tasks").insert([
    {
      task_description: "task1",
      task_notes: "lorem ipsum",
      completed: 0,
      project_id: 1
    },
    {
      task_description: "task1",
      task_notes: "lorem ipsum",
      completed: 0,
      project_id: 1
    },
    {
      task_description: "task2",
      task_notes: "lorem ipsum",
      completed: 0,
      project_id: 2
    },
    {
      task_description: "task2",
      task_notes: "lorem ipsum",
      completed: 0,
      project_id: 2
    },
    {
      task_description: "task3",
      task_notes: "lorem ipsum",
      completed: 0,
      project_id: 3
    },
    {
      task_description: "task3",
      task_notes: "lorem ipsum",
      completed: 0,
      project_id: 3
    },
    {
      task_description: "task3",
      task_notes: "lorem ipsum",
      completed: 0,
      project_id: 3
    }
  ]);
}; 