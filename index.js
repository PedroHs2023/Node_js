const express = require("express");
const app     = express();
const port    = 3000;
const router  = require("./route/index");
const conexao = require("./infraestrutura/conexao");
const tabelas = require("./infraestrutura/tabela");

tabelas.init(conexao);

router(app);

app.listen(port,(error) => 
{

    if(error)
    {
        console.log("Deu erro");
        return;
    };
    console.log("Subiu show!!!!");
});