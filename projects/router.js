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

module.exports = router