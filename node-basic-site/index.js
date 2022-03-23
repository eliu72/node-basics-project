const port = process.env.port || 8080

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')

    if (req.url === '/'){
        fs.readFile('index.html', (err, data) => {
            if (err) throw err
            res.write(data)
            res.end() // needed to end the response or webpage keeps loading forever
        })
    } else {
        let filepath = (req.url).replace('/', '') + '.html' 
        fs.readFile(filepath.replace('/', ''), (err, data) => {
            if (err) {
                fs.readFile('404.html', (err, data) => {
                    if (err) throw err
                    res.write(data)
                    res.end() // needed to end the response or webpage keeps loading forever
                })
            } else {
                res.write(data)
                res.end() // needed to end the response or webpage keeps loading forever
            }
        })
    }
})

server.listen(port, () => {
    console.log(`Listening on port ${port}.`)
})