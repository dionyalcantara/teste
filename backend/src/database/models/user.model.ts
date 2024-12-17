import { User } from '../../types/User'
import db from '.'

import { DataTypes, Model, ModelDefined, Optional } from 'sequelize'

export type UserInputtableFields = Optional<User, 'id'>

type UserSequelizeModelCreator = ModelDefined<User, UserInputtableFields>

export type UserSequelizeModel = Model<User, UserInputtableFields>

const UserModel: UserSequelizeModelCreator = db.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'users',
  }
)

export default UserModel
