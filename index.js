const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000

const testRoute = require('./routes/main.routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', testRoute);
app.set('port', PORT)
app.listen(app.get('port'), () => console.log(`Connected to port: ${PORT}!`))

module.exports = {app}