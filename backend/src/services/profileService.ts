import UserModel from '../database/models/user.model'
import { ServiceResponse, UserProfileData } from '../types/ServiceResponse'

async function getProfile(
  userId: number
): Promise<ServiceResponse<UserProfileData>> {
  const user = await UserModel.findByPk(userId, {
    attributes: ['name', 'email'],
  })

  if (!user) {
    return { status: 'NOT_FOUND', data: { message: 'Usuário não encontrado' } }
  }

  const name = user.get('name') as string
  const email = user.get('email') as string

  return { status: 'OK', data: { name, email } }
}

export default {
  getProfile,
}
