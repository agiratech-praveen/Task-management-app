const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true,
    },
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = new mongoose.model("Task", TaskSchema )