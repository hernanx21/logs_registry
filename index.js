const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 17995

const testRoute = require('./routes/main.routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', testRoute);
app.set('port', port)
app.listen(port, () => console.log('conectado'))

module.exports = {app}