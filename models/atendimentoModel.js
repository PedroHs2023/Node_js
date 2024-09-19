const conexao = require("../infraestrutura/conexao");
class atendimentoModel
{
    lista()
    {
        const sql = "Select * FROM atendimentos";
        return new Promise((resolve, reject) => 
        {   
            conexao.query(sql,{}, (error, resposta) =>
                {
                    if(error)
                        {
                            console.log("Deu erro no listar...");
                            reject(error);
                        }
                        console.log("Showww man");
                        resolve(resposta);
                });
        });
    }
}

module.exports = new atendimentoModel();