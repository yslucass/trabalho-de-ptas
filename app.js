import http from 'http'

const server = http.createServer((req, res) => {
    res.end("Hello Word")
})

server.listen(3333)