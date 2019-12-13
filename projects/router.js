const express = require('express')

const router = express.Router()

const Projects = require('./project-model.js')

router.get("/", (req, res) => {
    Projects.get()
      .then(projects => {
          res.status(200).json(projects);
      })
      .catch(err => {
        res.status(500).json({ message: "Error fetching projecs from database" });
      });
  });

  router.get("/:id", (req, res) => {
    const { id } = req.params;
  
    Projects.getById(id)
      .then(project => {
        const booleanProject = {
          ...project[0],
          completed: !!+`${project.completed}`
        };
  
        if (!project[0]) {
          return res.status(404).json({ message: "Invalid project id" });
        } else {
          res.status(200).json(booleanProject);
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Error fetching project from database" });
      });
  });
  
  router.post("/", (req, res) => {
    const project = req.body;
  
    if (!project.project_name) {
      return res.status(404).json({ message: "Missing project name" });
    }
  
    Projects.add(project)
      .then(count => {
        res.status(201).json(count);
      })
      .catch(err => {
        res.status(500).json({ message: "Error adding project to database" });
      });
  });
  
  //Tasks
  
  router.get("/:id/tasks", (req, res) => {
    const { id } = req.params;
    console.log(id);
    Projects.getTasks(id)
      .then(tasks => {
        console.log(tasks);
        if (!tasks[0]) {
          res.status(404).json({ message: "Invalid project id" });
        } else {
          res.status(200).json(tasks);
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Error fetching tasks from database" });
      });
  });
  
  router.post("/:id/tasks", (req, res) => {
    const { id } = req.params;
    const task = req.body;
    console.log(id);
    Projects.getById(id).then(project => {
      if (!project) {
        return res.status(404).json({ message: "Invalid Project ID" });
      }
      if (!task.task_description) {
        return res.status(404).json({ message: "Missing task description" });
      }
      Projects.addTask(id, task)
        .then(count => {
          res.status(201).json(count);
        })
        .catch(err => {
          res.status(500).json({ message: "Error adding task to database" });
        });
    });
  });
  
module.exports = router