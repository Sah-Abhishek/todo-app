// Write a express boiler plate code
// with a express.json() middleware

const express = require('express');
const mongoose = require('mongoose');

const app = express();

/*
body {
    title: string,
    description: string
}
*/

app.use(express.json);

app.get('/todo', (res, req) = () => {
    
})

app.post('/todos', (res, req) = () => {
    
})

app.put('/completed', (res, req) = () => {

})