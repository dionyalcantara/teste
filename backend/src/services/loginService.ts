import UserModel from '../database/models/user.model'
import { ServiceResponse } from '../types/ServiceResponse'
import { Token } from '../types/Token'
import jwtUtil from '../utils/jwtUtil'
import bcrypt from 'bcrypt'

async function validateLogin(
  email: string,
  password: string
): Promise<ServiceResponse<Token>> {
  const user = await UserModel.findOne({ where: { email: email } })

  if (!user) {
    return {
      status: 'UNAUTHORIZED',
      data: { message: 'Email ou Senha inválidos' },
    }
  }

  const storedPassword = user.getDataValue('password')

  const isPasswordValid = await bcrypt.compare(password, storedPassword)

  if (!isPasswordValid) {
    return {
      status: 'UNAUTHORIZED',
      data: { message: 'Email ou Senha inválidos' },
    }
  }

  const id = user.getDataValue('id')
  const userEmail = user.getDataValue('email')

  const token = jwtUtil.sign({ id, email: userEmail })

  return { status: 'OK', data: { token } }
}

export default {
  validateLogin,
}
