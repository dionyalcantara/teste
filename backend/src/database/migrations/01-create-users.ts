import { Model, QueryInterface, DataTypes } from 'sequelize'

import { User } from '../../types/User'

export default {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.createTable<Model<User>>('users', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    })
  },

  down: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.dropTable('users')
  },
}
