import { Request, Response } from 'express'
import loginService from '../services/loginService'
import mapStatusHTTP from '../utils/mapStatusHTTP'

async function login(req: Request, res: Response) {
  const { email, password } = req.body

  if (!email || !password) {
    res.status(401).json({ message: 'Email ou Senha inválidos' })
    return
  }

  const serviceResponse = await loginService.validateLogin(email, password)

  res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
}

export default {
  login,
}
