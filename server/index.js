const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const server = app.listen(3001, () => {
    console.log('Server is running at port 3001...')
})
let io = require('socket.io')(server)

handlers = require('./handlers')

io.on('connect', (socket) => {
    console.log('CONNECTED', socket)
    socket.on('sendInvite', user => handlers.sendInvite(user, socket, io))
})