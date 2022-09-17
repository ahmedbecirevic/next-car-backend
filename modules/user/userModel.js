import { Sequelize } from 'sequelize';

import sequelize from '../../database.js';
import Car from '../car/carModel.js';
import PurchaseHistory from '../purchaseHistory/purchaseHistoryModel.js';

const User = sequelize.define('users', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
  },
  phoneNumber: {
    type: Sequelize.STRING,
  },
  googleId: {
    type: Sequelize.STRING,
  },
  profilePictureUrl: {
    type: Sequelize.STRING,
  },
  displayName: {
    type: Sequelize.STRING,
  },
}, {
  underscored: true,
});

export default User;

User.hasMany(Car);
User.hasMany(PurchaseHistory);
Car.belongsTo(User);
PurchaseHistory.belongsTo(User);
