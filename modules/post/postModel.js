import { Sequelize } from 'sequelize';

import sequelize from '../../database.js';
import Image from '../image/imageModel.js';

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

Post.hasMany(Image);
Image.belongsTo(Post);

export default Post;
