const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

const testRoute = require('./routes/main.routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', testRoute);

app.listen(port, () => console.log('conectado'))

module.exports = {app}