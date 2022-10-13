const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('<n1>Olá Mundo!</n1>')
})

app.listen(port, () =>{
    console.log('Server Start')
})