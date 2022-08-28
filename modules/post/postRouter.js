import express from 'express';
import { cookieParser, verifyAccessToken } from '../../middlewares/auth.js';
import validationMiddleware from '../../middlewares/validationMiddleware.js';
import errorHandler from '../../utils/errorHandler.js';
import { checkIfCarBelongsToUser } from '../car/carDBValidators.js';
import {
  addNewPost, getAllPostsForUser, getAllPostsByCar, getPost,
} from './postController.js';
import { addNewPostBodyValidators, getPostsByCarIdParamValidators } from './postValidators.js';

const router = express.Router();

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Returns the list of posts
 *     tags: [Cars]
 *     responses:
 *       200:
 *         description: The list posts query param carId
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get(
  '/',
  cookieParser,
  verifyAccessToken,
  errorHandler(getAllPostsForUser),
);

router.get(
  '/:id',
  cookieParser,
  verifyAccessToken,
  errorHandler(getPost),
);

router.get(
  '/cars/:carId',
  cookieParser,
  verifyAccessToken,
  getPostsByCarIdParamValidators,
  validationMiddleware,
  checkIfCarBelongsToUser,
  errorHandler(getAllPostsByCar),
);

router.post(
  '/',
  cookieParser,
  verifyAccessToken,
  addNewPostBodyValidators,
  validationMiddleware,
  checkIfCarBelongsToUser,
  errorHandler(addNewPost),
);

export default router;
