import { Router } from 'express'
import multer from 'multer'

import multerConfig from './config/multer'
import auth from './config/auth'

const upload = multer(multerConfig)
const route = new Router()

//User

// Products

// Sales

// Chart

// Orders

export default route