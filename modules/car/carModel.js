import { Sequelize } from 'sequelize';

import sequelize from '../../db.js';

const Car = sequelize.define('cars', {
  fuelType: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mileage: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  productionYear: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  vin: {
    type: Sequelize.STRING,
  },
  horsePower: {
    type: Sequelize.STRING,
  },
  engineDisplacement: {
    type: Sequelize.DOUBLE,
  },
}, {
  underscored: true,
});

export default Car;
