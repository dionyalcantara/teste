import { Router } from 'express'
import registerController from '../controllers/registerController'

const registerRouter = Router()

registerRouter.post('/api/register', registerController)

export default registerRouter
