import { param } from 'express-validator';

// eslint-disable-next-line import/prefer-default-export
export const idParamValidator = [
  param('id').exists().isNumeric(),
];
