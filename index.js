// Importar o express

const express = require("express")
const req = require("express/lib/request")
const res = require("express/lib/response")

// Criar um servidor: app

const app = express()


// Definindo a pasta de arquivos estátitcos
app.use(express.static(__dirname + "/public"))

// Cirar uma rota "/" que vai enviar um arquivo views/index.html

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/views/index.html")

})



// Rodar o servidor na porta 3000

app.listen(3000,()=>{console.log("Servidor rodando na porta 3000")})