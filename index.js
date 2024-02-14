//Incluir as bibliotecas 
//Gerencia as requisições, rotas e URLs entre outras funcionalidades
const express = require("express");

const app = express();

//importar biblioteca para permetir conexão externa
const cors = require('cors')

//Criar o middleware para receber os dados no corpor da requisição
app.use(express.json());

//Criar o middleware para permetir requisição externa

app.use((req, res, next) => {
//Qualquer endereço pode fazer a requisição
res.header("Access-Control-Allow-Origin", "*");
//Tipos de método que a API aceita
res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//Permitir o envio de dados para API
res.header("Access-Control-Allow-Headers", "Content-Type");
//Executar o cors
app.use(cors());
//Quando não houver erro dece continuar o processamento
next();
});

//incluir as CONTROLLERS
const messages = require("./controllers/mesages");

//Criar as rotas
app.use('/message', messages);

//Iniciar o servidor na porta 8080, criar a função utilizando modelo Arrow function para retornar a mensagem de sucesso
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});