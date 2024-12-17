import UserModel from '../database/models/user.model'
import { ServiceResponse } from '../types/ServiceResponse'
import bcrypt from 'bcrypt'

async function registerUser(
  name: string,
  email: string,
  password: string
): Promise<ServiceResponse<number>> {
  const existingUser = await UserModel.findOne({ where: { email } })
  if (existingUser) {
    return { status: 'INVALID_DATA', data: { message: 'Email já cadastrado' } }
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const serviceResponse = await UserModel.create({
    name,
    email,
    password: hashedPassword,
  })

  return { status: 'CREATED', data: serviceResponse.getDataValue('id') }
}

export default {
  registerUser,
}
