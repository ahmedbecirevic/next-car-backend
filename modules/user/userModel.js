import { Sequelize } from 'sequelize';

import sequelize from '../../database.js';
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
  googleId: {
    type: Sequelize.STRING,
  },
}, {
  underscored: true,
});

export default User;

User.hasMany(Car);
Car.belongsTo(User);
