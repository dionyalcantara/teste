import { Router } from 'express'
import profileController from '../controllers/profileController'
import verifyToken from '../middlewares/profileMiddleware'

const profileRouter = Router()

profileRouter.get('/api/profile', verifyToken, profileController.getProfile)

export default profileRouter
