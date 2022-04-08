import { Sequelize } from 'sequelize';

import sequelize from '../../database.js';

const Image = sequelize.define('images', {
  link: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
});

export default Image;
