import express from 'express';
import multer from 'multer';
import { cookieParser, verifyAccessToken } from '../../middlewares/auth.js';
import { uploadImages } from './imageController.js';
import errorHandler from '../../utils/errorHandler.js';

const upload = multer();
const router = express.Router();

router.post(
  '/upload',
  upload.array('images', 6),
  cookieParser,
  verifyAccessToken,
  errorHandler(uploadImages),
);

export default router;
