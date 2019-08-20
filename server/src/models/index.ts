import { INTEGER, Model, STRING, TEXT } from 'sequelize';

import sequelize from '../db';

export class User extends Model {}

User.init({
  id: {type: INTEGER, primaryKey: true, autoIncrement: true},
  name: STRING(20),
  pwd: TEXT,
}, {
  sequelize,
  modelName: 'user'
});
