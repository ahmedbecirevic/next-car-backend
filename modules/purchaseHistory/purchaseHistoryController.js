import { responseOk } from '../../utils/responses.js';
import * as purchaseHistoryService from './purchaseHistoryService.js';

export const addPurchaseHistory = async (req, res) => {
  const purchaseHistory = req.body;
  const createdPurchaseHistory = await purchaseHistoryService.addPurchaseHistory(purchaseHistory);

  return responseOk(res, createdPurchaseHistory);
};

export const getPurchaseHistoryForUser = async (req, res) => {
  const { userId } = req.params;
  const purchaseHistory = await purchaseHistoryService.getPurchaseHistoryByUserId(userId);

  return responseOk(res, purchaseHistory);
};
