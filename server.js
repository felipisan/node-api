const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();
app.use(express.json());

// Iniciando o db
mongoose.connect('mongodb://localhost:27017/api', {useNewUrlParser: true}, {useUnifiedTopology: true});

// Executandos os models 
requireDir('./src/models');

//Coringa para receber todas as requisições (get, post, put, delete)
//Em vez de app.get, com app. use dá pra rodar todas as funções
//Criamos uma rota para o servidor: localhost:3001/api
app.use('/api', require('./src/routes') );

//Dá para fazer configurações de segurança aqui
//Tipo permitir acesso à API para um domínio específico.
//Mas, sem parâmetros assim, vai ficar acessível publicamente.
app.use(cors());
//Abrirá e setará a porta 3001 como a porta que terá o servidor
app.listen(3001);