const http = require('http')

const data = [
    {
        id: 1,
        name: 'shayan'
    },
    {
        id: 2,
        name: 'Gardes'
    },
    {
        id: 3,
        name: 'spacecowboy'
    }
]

const server = http.createServer((req, res) =>{
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('content-language', 'en-US')
    res.setHeader('Date',new Date(Date.now()))
    res.setHeader('x-powered-by', 'node,js')

    res.end(
        JSON.stringify({
            data : data
    })
        )   
})

server.listen(3000, ()=> {
    console.log('server is started')
})