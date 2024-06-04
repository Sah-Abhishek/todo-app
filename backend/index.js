// Write a express boiler plate code
// with a express.json() middleware

const express = require('express');
const mongoose = require('mongoose');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');

const app = express();

/*
body {
    title: string,
    description: string
}
*/

app.use(express.json);

app.post('/todo', async(req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        req.status(411).json({
            message: "You've sent the wrong inputs",
        })
        return;
    }
    //put in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        message: "Todo Created"
    })
    
})

app.put('/todos', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message: "You've sent the wrong inputs",
        })
        return;
    }

    
})


app.get('/todos', async(res, req) => {
    const todos = await todo.find();
    console.log(todos);
    res.json({
        todos
    })
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        message: "Todo marked as completed"
    })
} )

// app.put('/completed', (req, res) = () => {

// })