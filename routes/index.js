const router = require("express").Router();

const Task = require("../models/Task");

// routes 

router.get("/", async(req, res) => {
   const taskList = await Task.find();
   res.render("index", {task: taskList})
});

module.exports = router; 