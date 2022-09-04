import express from 'express';
import multer from 'multer';
import { cookieParser, verifyAccessToken } from '../../middlewares/auth.js';
import { deleteImage, uploadImages } from './imageController.js';
import errorHandler from '../../utils/errorHandler.js';
import { idParamValidator } from './imageValidators.js';
import validationMiddleware from '../../middlewares/validationMiddleware.js';

const upload = multer();
const router = express.Router();

router.post(
  '/upload',
  upload.array('images', 6),
  cookieParser,
  verifyAccessToken,
  errorHandler(uploadImages),
);

router.delete(
  '/:id',
  cookieParser,
  verifyAccessToken,
  idParamValidator,
  validationMiddleware,
  errorHandler(deleteImage),
);

export default router;
