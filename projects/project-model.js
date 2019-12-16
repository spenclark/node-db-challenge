const db = require('../data/db-config.js')

function get() {
    return db('projects')
}

module.exports = {
    get,
    getById,
    add,
    getTasks,
    addTask,
    findResource,
    insertResource,
    findResourceById
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
  
  function findResource(projectId) {
    return db('resources')
      .join('projects_resources', 'resources.id', 'projects_resources.resource_id')
      .where({'projects_resources.project_id': projectId})
  }
  
  function findResourceById(id) {
    return db('resources')
      .where(({id}))
  }
  
  function insertResource(projectId, resource) {
    return db('resources').insert(resource)
      .then(([id]) => {
        return db('projects_resources').insert({
          project_id: projectId,
          resource_id: id,
        })
      })
      .catch(() => {
        return findResourceById(id)
      })
  } 