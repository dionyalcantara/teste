import bcrypt from 'bcrypt'
import { QueryInterface } from 'sequelize'

const SALT_ROUNDS = process.env.SALT_ROUNDS || '10'

export default {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Joao Silva',
          email: 'joao@teste.com',
          password: bcrypt.hashSync('123456', parseInt(SALT_ROUNDS)),
        },
        {
          name: 'Maria Souza',
          email: 'maria@teste.com',
          password: bcrypt.hashSync('123456', parseInt(SALT_ROUNDS)),
        },
      ],
      {}
    )
  },

  down: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.bulkDelete('users', {})
  },
}
