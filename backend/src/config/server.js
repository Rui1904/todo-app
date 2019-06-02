const port = 3003

const bodyParser = require('body-parser')
const express = require('express') //Servidor Web
const server = express() //Start Express (Instância do express criada na variável server)
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended:true })) //Middleware
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server