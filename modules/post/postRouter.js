import express from 'express';
import { cookieParser, verifyAccessToken } from '../../middlewares/auth.js';
import validationMiddleware from '../../middlewares/validationMiddleware.js';
import errorHandler from '../../utils/errorHandler.js';
import { checkIfCarBelongsToUser } from '../car/carDBValidators.js';
import {
  addNewPost, getAllPostsForUser, getAllPostsByCar, getPost, getPostWithImages, getAllPosts,
} from './postController.js';
import { addNewPostBodyValidators, getPostsByCarIdParamValidators, getPostByIdParamValidators } from './postValidators.js';

const router = express.Router();

router.get(
  '/',
  cookieParser,
  verifyAccessToken,
  errorHandler(getAllPosts),
);

/**
 * @swagger
 * /posts/user:
 *   get:
 *     summary: Returns the list of posts for a specific user
 *     tags: [Cars]
 *     responses:
 *       200:
 *         description: The list of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get(
  '/user',
  cookieParser,
  verifyAccessToken,
  errorHandler(getAllPostsForUser),
);

router.get(
  '/:id',
  cookieParser,
  verifyAccessToken,
  getPostByIdParamValidators,
  validationMiddleware,
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

router.get(
  '/:id/images',
  cookieParser,
  verifyAccessToken,
  getPostByIdParamValidators,
  validationMiddleware,
  errorHandler(getPostWithImages),
);

export default router;
