import express from 'express';
import { cookieParser, verifyAccessToken } from '../../middlewares/auth.js';
import validationMiddleware from '../../middlewares/validationMiddleware.js';
import errorHandler from '../../utils/errorHandler.js';
import { addPurchaseHistory, getPurchaseHistoryForUser } from './purchaseHistoryController.js';
import { purchaseHistoryBodyValidator, userIdParamValidator } from './purchaseHistoryValidators.js';

const router = express.Router();

// TODO: add middleware to check if user is requesting to purchase a listing/post belonging to him
router.post(
  '/',
  cookieParser,
  verifyAccessToken,
  purchaseHistoryBodyValidator,
  validationMiddleware,
  errorHandler(addPurchaseHistory),
);

router.get(
  '/user/:userId',
  cookieParser,
  verifyAccessToken,
  userIdParamValidator,
  validationMiddleware,
  errorHandler(getPurchaseHistoryForUser),
);

export default router;
