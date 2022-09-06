import { body, param } from 'express-validator';

export const purchaseHistoryBodyValidator = [
  body().isObject(),
  body('status').isIn(['REQUESTED', 'FINISHED']),
  body('listingId').exists().isNumeric(),
  body('userId').exists().isNumeric(),
];

export const userIdParamValidator = [
  param('userId').exists().isNumeric(),
];
