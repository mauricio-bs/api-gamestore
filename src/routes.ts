import { Router } from 'express'
import multer from 'multer'

import multerConfig from './config/multer'

const upload = multer(multerConfig)
const route = Router()

//User

// Products

// Sales

// Chart

// Orders

export { route }
