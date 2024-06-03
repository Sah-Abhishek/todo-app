// Write a express boiler plate code
// with a express.json() middleware

const express = require('express');
const mongoose = require('mongoose');
const { createTodo, updateTodo } = require('./types');

const app = express();

/*
body {
    title: string,
    description: string
}
*/

app.use(express.json);

app.get('/todo', (req, res) = () => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        req.status(411).json({
            message: "You've sent the wrong inputs",
        })
        return;
    }
    //put in mongodb
    
})

app.post('/todos', (req, res) = () => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message: "You've sent the wrong inputs",
        })
        return;
    }
    
})

app.put('/completed', (req, res) = () => {

})