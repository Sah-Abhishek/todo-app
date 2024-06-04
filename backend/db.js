 /*
Todo{
    title: string;
    description: string,
    completed: boolean
}


 */

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://abhish:6YAt8eAogRGC5dhR@cluster0.jv7k7a6.mongodb.net/");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}