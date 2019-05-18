import { Model, STRING, TEXT, INTEGER } from 'sequelize';
import sequelize from '../db';

export class User extends Model {}

User.init({
  id: {type: INTEGER, primaryKey: true, autoIncrement: true},
  name: STRING(20),
  description: TEXT,
}, {
  sequelize,
  modelName: 'user'
});