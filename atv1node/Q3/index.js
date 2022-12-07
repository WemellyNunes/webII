const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {
    resp.send(`<h1> Parabéns. Usuário foi incluído!!!! </h1>`)
})

app.listen(3000)