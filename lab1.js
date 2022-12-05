const http = require('http')

const lab1 = http.createServer((request, response) => {
    response.write('ALASKA-KOLASKA')
    response.end()
})

lab1.listen(3003)
