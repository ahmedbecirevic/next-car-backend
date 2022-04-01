import { Sequelize } from 'sequelize';

import sequelize from '../../db.js';
import Car from '../car/carModel.js';

const User = sequelize.define('users', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.STRING,
  },
}, {
  underscored: true,
});

export default User;

User.hasMany(Car);
Car.belongsTo(User);
