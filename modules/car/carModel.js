import { Sequelize } from 'sequelize';

import sequelize from '../../database.js';
import Image from '../image/imageModel.js';
import Post from '../post/postModel.js';

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
    type: Sequelize.SMALLINT,
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

Car.hasMany(Image);
Car.hasMany(Post);
Image.belongsTo(Car);
Post.belongsTo(Car);

export default Car;
