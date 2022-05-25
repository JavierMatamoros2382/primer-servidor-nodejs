const express = require('express')

const app = express()

app.get('/', function(req, res){
    res.send('Hola este es mi primer servidor')
})

app.listen(3000)