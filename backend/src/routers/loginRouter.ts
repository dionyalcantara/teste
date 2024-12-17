import { Router } from 'express'
import loginController from '../controllers/loginController'

const loginRouter = Router()

loginRouter.post('/api/login', loginController.login)

export default loginRouter
