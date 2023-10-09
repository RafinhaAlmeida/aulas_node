const express = require("express")
const path = require("path")

const app = express()

const caminho = path.join(__dirname, "templetes")

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminhop}/index.html`)
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})