const express = require('express')
const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send("meu back end esta funcionando!")
})

app.liste(3000, () => {
    console.log("servidor rodando na porta 3000!")
})