import { Sequelize } from 'sequelize';

import sequelize from '../../db.js';

const Image = sequelize.define('images', {
  link: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
});

export default Image;
