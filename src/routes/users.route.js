import express from 'express'
import { createUsersController, getUsersController } from '../controllers/users.controller.js'

const router = express.Router()
router.post('/', createUsersController)
router.get('/', getUsersController)

export default router