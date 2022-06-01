let express = require('express')
let app = express.Router()
const axios = require('axios')
const { get, post, put, dom } = require('../controllers/main')({axios})
const auth = require('../middelwares/index')


app.get('/health', get)
app.post('/', auth.authenticate ,post)
app.post('/list', auth.authenticate ,post)
//app.put('/:id', put)
//app.delete('/:id', dom)


module.exports = app