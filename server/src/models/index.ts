import { INTEGER, Model, STRING, TEXT } from 'sequelize';

import sequelize from '../db';

export interface User {
  id: number;
  name: string;
  pwd: string;
}

export class User extends Model {
}

User.init({
  id: {type: INTEGER, primaryKey: true, autoIncrement: true},
  name: STRING(20),
  pwd: TEXT,
}, {
  sequelize,
  modelName: 'user'
});
