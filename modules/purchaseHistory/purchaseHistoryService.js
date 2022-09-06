import * as purchaseHistoryDal from './purchaseHistoryDal.js';

export const addPurchaseHistory = async (purchaseHistory) => {
  const { listingId, userId, status } = purchaseHistory;
  const createdPurchaseHistory = await purchaseHistoryDal.createPurchaseHistory({
    postId: listingId,
    status,
    userId,
  });

  return createdPurchaseHistory;
};

export const getPurchaseHistoryByUserId = async (userId) => {
  const purchaseHistory = await purchaseHistoryDal.getAllByUserId(userId);

  return purchaseHistory;
};
