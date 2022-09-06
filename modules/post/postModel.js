import { Sequelize } from 'sequelize';

import sequelize from '../../database.js';
import Image from '../image/imageModel.js';
import PurchaseHistory from '../purchaseHistory/purchaseHistoryModel.js';

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
Post.hasMany(PurchaseHistory);
Image.belongsTo(Post);
PurchaseHistory.belongsTo(Post);

export default Post;
