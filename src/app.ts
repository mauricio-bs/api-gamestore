import express from 'express'
import { route } from './routes'
import cors from 'cors'
import './database'
import http from 'http'

const app = express()

const httpServer = http.createServer(app)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(route)

export { httpServer }
