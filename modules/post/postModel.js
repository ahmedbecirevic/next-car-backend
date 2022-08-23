import { Sequelize } from 'sequelize';

import sequelize from '../../database.js';

const Post = sequelize.define('posts', {
  condition: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
}, {
  underscored: true,
});

export default Post;
