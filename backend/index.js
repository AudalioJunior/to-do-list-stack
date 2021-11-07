const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const TodoRoutes = require('./src/controllers/TodoController');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost:27017/mongo-todo')
.then(() => { console.log("Banco conectado!")})

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, get, values, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS, PUT');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.use('/todo', TodoRoutes);

app.listen(3000);