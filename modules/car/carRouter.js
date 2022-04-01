import express from 'express';
import errorHandler from '../../utils/errorHandler.js';
import { getCarFromIdParam } from './carController.js';
import { getCarByIdValidators } from './carValidators.js';
import validationMiddleware from '../../middlewares/validationMiddleware.js';

const router = express.Router();

router.get(
  '/:carId',
  getCarByIdValidators,
  validationMiddleware,
  errorHandler(getCarFromIdParam),
);

export default router;
