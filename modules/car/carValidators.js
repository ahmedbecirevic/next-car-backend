import { param, body } from 'express-validator';
import { REGEX } from '../../utils/constants.js';

// eslint-disable-next-line import/prefer-default-export
export const getCarByIdValidators = [
  param('id').isNumeric(),
];

export const addCarBodyValidators = [
  body().isObject(),
  body('vin').matches(REGEX.VIN),
  body('mileage').isDecimal(),
  body('fuelType').isAlpha(),
  body('productionYear').isNumeric(),
  body('description').isString(),
  body('horsePower').isNumeric(),
  body('engineDisplacement').isDecimal(),
];
