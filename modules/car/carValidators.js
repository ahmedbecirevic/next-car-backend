import { param } from 'express-validator';

// eslint-disable-next-line import/prefer-default-export
export const getCarByIdValidators = [
  param('id').isNumeric(),
];
