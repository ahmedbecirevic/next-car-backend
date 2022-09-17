import { Op } from 'sequelize';
import Car from '../car/carModel.js';
import Post from '../post/postModel.js';
import User from '../user/userModel.js';
import PurchaseHistory from './purchaseHistoryModel.js';

export const getAllByUserId = (userId) => PurchaseHistory.findAll({
  where: {
    [Op.or]:
      [
        { userId },
        { '$post.car.user_id$': userId },
      ],
  },
  include: [
    {
      model: Post,
      include: [{ model: Car, include: [User] }],
    },
  ],
});

export const getAllByPostId = (postId) => PurchaseHistory.findAll({
  where: {
    listingId: postId,
  },
});

export const createPurchaseHistory = (purchaseHistory) => PurchaseHistory.create(purchaseHistory);

export const updatePurchaseHistory = (purchaseHistory) => PurchaseHistory.update(purchaseHistory, {
  where: { id: purchaseHistory?.id },
  returning: true,
});
