const db = require('../data/db-config.js')

function get() {
    return db('projects')
}

module.exports = {
    get,
    getById,
    add,
    getTasks,
    addTask
  };
  
  function get() {
    return db("projects");
  }
  
  function getById(id) {
    return db("projects").where({ id });
  }
  
  function add(project) {
    return db("projects").insert(project);
  }
  
  function getTasks(id) {
    return db("projects")
      .innerJoin("tasks", "tasks.project_id", "projects.id")
      .select(
        "tasks.task_description",
        "tasks.task_notes",
        "tasks.completed",
        "tasks.project_id"
      )
      .where({ project_id: id });
  }
  
  function addTask(id, task) {
    return db("tasks")
      .where({ project_id: id })
      .insert(task);
  } 