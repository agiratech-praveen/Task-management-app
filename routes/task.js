const router = require('express').Router();

const Task = require("../models/Task");

router.post("/add/task", (req, res) => {
    const { task } = req.body;

    const newTask = new Task({task})
    console.log(task);

    newTask.save()
    .then(() => {
        console.log("success")
        res.redirect("/");
    })
 .catch((err) => console.log(err))
  
})


 .get("/delete/task/:_id", (req, res)=>{
    console.log("Deleted1");
    const {_id} = req.params;
    Task.deleteOne({ _id })
    .then(() =>{
        console.log("Deleted");
        res.redirect("/")
    })
    .catch((err) => console.log(err))
})
.get("/edit/task/:_id", async(req, res) => {
    const { _id } = req.params;
 console.log(req)
    try {
      const task = await Task.findById(_id);
      res.render("edit", { task });
    } catch (err) {
      console.log(err);
      res.redirect("/");
    }
 })
 .post("/save/task/:_id", (req, res) => {
    const { _id } = req.params;
    const { task, completed } = req.body;
    console.log(req.body)
    Task.updateOne({ _id }, { task, completed: completed==='on' ? true:false })
      .then(() => {
        console.log("Task updated");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });

module.exports = router;