const http = require('http')
const porta=process.env.PORT 

const servidor= http.createServer((req, res) => {
    res.statusCode=200
    res.writeHeader({'Content-type' : 'text-plain'})
    res.end('CFB')
})

servidor.listen(porta || 3000,() => {console.log('Servidor rodando')})