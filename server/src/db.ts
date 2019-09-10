import { Sequelize } from 'sequelize';

export default new Sequelize('yacht', 'yacht', 'yacht', {
  dialect: 'postgres',
  host: 'db'
});