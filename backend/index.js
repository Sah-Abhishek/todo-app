// Write a express boiler plate code
// with a express.json() middleware

const express = require('express');
const mongoose = require('mongoose');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors');


const app = express();
app.use(cors(
    {
        origin: "http://localhost:5173"
    }
));


/*
body {
    title: string,
    description: string
}
*/

app.use(express.json());

app.post('/todo', async(req, res) => {
    const createPayload = req.body;
    console.log(createPayload);
    const parsedPayload = createTodo.safeParse(createPayload);
    console.log(parsedPayload);

    if(!parsedPayload.success){
        res.status(400).json({
            message: "You've sent the wrong inputs",
        })
        return;
    }
    //put in mongodb
    try {
        // Save the todo to MongoDB
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        });
        
        res.json({
            message: "Todo Created"
        });
    } catch (error) {
        console.error("Error creating todo:", error);
        // Handle database error
        res.status(500).json({
            message: "Failed to create todo"
        });
    }
    
})

app.put('/todos', async (req, res) => {
    try{
        const updatePayload = req.body;
        const parsedPayload = updateTodo.safeParse(updatePayload);
        if(!parsedPayload.success){
            res.status(400).json({
                message: "You've sent the wrong inputs",
            })
            return;
        }
        await todo.update({
            _id: req.body.id
        },{
            completed: true
        })
        res.json({
            message: "Todo marked as completed"
        })
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({
            message: "Server error"
        });
    }

    
})


app.get('/todos', async(req, res) => {
    const todos = await todo.find();
    console.log(todos);
    res.json({
        todos
    })
    // await todo.update({
    //     _id: req.body.id
    // },{
    //     completed: true
    // })
    // res.json({
    //     message: "Todo marked as completed"
    // })
} )

app.listen(3000);

// app.put('/completed', (req, res) = () => {

// })