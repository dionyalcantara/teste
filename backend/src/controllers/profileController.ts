import { Request, Response } from 'express'
import profileService from '../services/profileService'
import mapStatusHTTP from '../utils/mapStatusHTTP'

async function getProfile(req: Request, res: Response) {
  const userId = res.locals.id

  const profile = await profileService.getProfile(userId)

  res.status(mapStatusHTTP(profile.status)).json(profile.data)
}

export default {
  getProfile,
}
