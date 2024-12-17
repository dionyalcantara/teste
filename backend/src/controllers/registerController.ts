import { Request, Response } from 'express'
import registerService from '../services/registerService'
import mapStatusHTTP from '../utils/mapStatusHTTP'

export default async function register(req: Request, res: Response) {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res
      .status(400)
      .json({ message: 'Nome, Email ou Senha não foram informados' })
    return
  }

  const serviceResponse = await registerService.registerUser(
    name,
    email,
    password
  )

  res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
}
