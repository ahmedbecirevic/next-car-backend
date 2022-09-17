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

export const update = async (purchaseHistory) => {
  const {
    listingId, userId, status, id,
  } = purchaseHistory;
  // eslint-disable-next-line no-unused-vars
  const [_, updated] = await purchaseHistoryDal.updatePurchaseHistory({
    postId: listingId,
    status,
    userId,
    id,
  });

  return updated[0];
};
