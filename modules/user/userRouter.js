import express from 'express';
import passport from 'passport';
import config from '../../config.js';
import { generateJwtAndRedirect } from './userController.js';
import errorHandler from '../../utils/errorHandler.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: int
 *          description: ID of the user
 *        email:
 *          type: string
 *          description: User email
 *        password:
 *          type: string
 *          description: Password of the user
 *        phoneNumber:
 *          type: string
 *          description: Phone number for user
 *        googleId:
 *          type: string
 *          description: Google Id of user
 *      example:
 *        id: 345
 *        email: becir_isakovic@ibu.ba
 *        password: hf9438hf3902pweipoj
 *        phoneNumber: 061843024
 *        googleId: 38rhj9w
 */

/**
  * @swagger
  * tags:
  *   name: Users
  *   description: The user managing API
  */

/**
 * @swagger
 * /users/auth/google:
 *   get:
 *     summary: Redirects to Google sign in
 *     tags: [Users]
 */
router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

/**
 * @swagger
 * /users/auth/google/callback:
 *   get:
 *     summary: Callback Google OAuth endpoint that returns token in cookie and redirects
 *     tags: [Users]
 */
router.get(
  '/auth/google/callback',
  passport.authenticate(
    'google',
    {
      failureRedirect: config.FRONTEND_ORIGIN,
      session: false,
    },
  ),
  errorHandler(generateJwtAndRedirect),
);

export default router;
