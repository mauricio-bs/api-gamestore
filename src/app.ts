import 'dotenv/config'
import express from 'express'
import { route } from './routes'
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io'

const app = express()

app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'] }))
const httpServer = http.createServer(app)

const io = new Server(httpServer)

io.on('connect', socket => {
  console.log('Connected on socket: ', socket)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(route)

export { httpServer, io }
