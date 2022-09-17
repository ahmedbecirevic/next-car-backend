import { Sequelize } from 'sequelize';

import sequelize from '../../database.js';

const PurchaseHistory = sequelize.define('purchase_history', {
  status: {
    type: Sequelize.ENUM('REQUESTED', 'FINISHED', 'BOUGHT', 'SOLD', 'CANCELED'),
    allowNull: true,
  },
}, {
  underscored: true,
  freezeTableName: true,
});

export default PurchaseHistory;
