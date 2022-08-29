import { body, param } from 'express-validator';

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

export const getPostByIdParamValidators = [
  param('id').exists().isNumeric(),
];
