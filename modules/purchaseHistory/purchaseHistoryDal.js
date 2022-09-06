import PurchaseHistory from './purchaseHistoryModel.js';

export const getAllByUserId = (userId) => PurchaseHistory.findAll({
  where: {
    userId,
  },
});

export const getAllByPostId = (postId) => PurchaseHistory.findAll({
  where: {
    listingId: postId,
  },
});

export const createPurchaseHistory = (purchaseHistory) => PurchaseHistory.create(purchaseHistory);
