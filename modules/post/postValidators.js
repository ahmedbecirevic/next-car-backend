import { body, param } from 'express-validator';

// eslint-disable-next-line import/prefer-default-export
export const getPostsByCarIdParamValidators = [
  param('carId').exists().isNumeric(),
];

export const addNewPostBodyValidators = [
  body().isObject(),
  body('condition').isString(),
  body('location').isString(),
  body('title').isString(),
  body('price').isDecimal(),
];
