const http = require('http')

const fs = require('fs')

const porta = process.env.PORT

const server = http.createServer((req, res) => {
    fs.appendFile('teste.txt','Curso de Node',(err)=>{
        if(err) throw err
        console.log('Arquivo Criado')
    
})
})

server.listen(porta || 3000, () => {console.log('Servidor rodando')})