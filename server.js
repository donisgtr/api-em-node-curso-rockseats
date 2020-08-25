const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const requireDir = require('require-dir')
// Iniciando a aplicação
const app  = express();
app.use(express.json());
app.use(cors());

// Iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true}  );
requireDir('./src/models');
//require('./src/models/Product');

//Rotas
app.use('/api', require("./src/routes"));

app.listen(3001);