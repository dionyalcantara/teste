import { Request, Response, NextFunction } from 'express'
import jwtUtil from '../utils/jwtUtil'

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    res.status(403).json({ message: 'Token não fornecido' })
    return
  }

  try {
    const payload = jwtUtil.verify(token)
    res.locals.id = payload.id
    next()
  } catch (err) {
    res.status(401).json({ message: `Token invalido : ${err}` })
    return
  }
}

export default verifyToken
