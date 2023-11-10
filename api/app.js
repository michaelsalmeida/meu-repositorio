// Importando as bibliotecas

const express = require('express');
const cors = require('cors');

// Importando as minhas rotas

const router = require('./router');

// Instanciando a classe express para usar seus métodos

const app = express();

// Configurações do express

app.use(cors());
app.use(express.json());
app.use(router);
