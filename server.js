const express = require('express')
const server = express()

const helmet = require('helmet')

const router = require('./projects/router.js')

server.use(helmet())
server.use(express.json())

server.use('/api/projects', router)

server.get('/', (req, res) => {
    res.send({message: 'Server is sane!'})
})

module.exports = server