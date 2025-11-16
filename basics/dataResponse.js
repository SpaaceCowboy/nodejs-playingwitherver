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
    res.end(
        JSON.stringify({
            data : data
    })
        )   
})

server.listen(3000, ()=> {
    console.log('server is started')
})