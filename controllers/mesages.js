//Incluir as bibliotecas

//Gerencia as requisições, rotas e URLs, entre outra funcionalidades 
const express = require("express");

//Incluir a conexão com o banco de dados
const db = require("../db/models");


//Chamar a função express
const router = express.Router();

//Criar a rota cadastrar 
router.post("/", async (req, res) => {
    
//receber os dados do corpo da requisição
   var data = req.body;

//salvar no banco ded dados
   await db.Messages.create(data).then((dataMessage) => {
        return res.json({
            error: false,
            message: "Mensagem cadastrada com sucesso!",
            data: dataMessage
        });
   }).catch(() => {
        return res.json({
            error: false,
            message: "Erro: Mensagem não cadastrada com sucesso!"
        });
   });
});

//Exportar a instrução que está dentro da constante router
module.exports = router; 