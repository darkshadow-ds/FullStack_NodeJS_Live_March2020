const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

function middleware1 (req, res, next) {
    console.log(req.url)
    res.send('sidubgisdugb')
    next() // Here next() call middleware2 according to app.get('/x', middleware1, middleware2).
}
function middleware2 (req, res, next) {
    console.log(req.hostname)

    res.send('sidubgisdugb')
}


app.get('/x', middleware1, middleware2)
/*
 Here after getting get request at '/x' middleware1 will run and due to next() 
in middleware1, middleware2 will run.

*/



app.listen(3333, () => {
    console.log('server started on http://0.0.0.0:3333')
})
/*
node_modules is folder ko delete krne ke baad jb hum npm install likhte h terminal me jo package.json
waali saari dependencies install ho jaati h. General practice ye hoti h ki jb hum code share kre to 
node_modules wale package ko delete krke code share kre.

Use port number from 1025 to 65536.
https server use 443 port number.
http server use 80 port number

GET request ke ander sirf url hoti h.

Ek request ke corresponding ek hi request ho sakta h.

Function jo request aane pr call ho jayenge apne aap hum unhe aur unke ander hum response ko send krne
ka kaam krenge aise function ko hum middleware function ya phir handler function bolte h.
*/