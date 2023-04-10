const express = require("express")
const mongoose = require("mongoose")

const app = express()

mongoose.connect("mongodb://localhost:27017/task_manager", {
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB connection error:", err));;
//middlewares
app.use(express.urlencoded({extended: true}))

app.use(express.static("public"));

app.set("view engine", "ejs");
 //routes
 app.use(require("./routes/index"));

 app.use(require("./routes/task"));
//server config
app.listen(3000, () => { console.log("Server started listening in port 3000") })