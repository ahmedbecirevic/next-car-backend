import express from 'express';
import passport from 'passport';
import logger from '../../logger.js';

import errorHandler from '../../utils/errorHandler.js';
import { authenticateUserWithGoogleOAuth } from './userController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('User base endpoint');
});

router.post(
  '/auth/google',
  passport.authenticate('google', { failureRedirect: '/failed', session: false }),
  (req, res) => {
    logger.info('in the auth router');
  },
  errorHandler(authenticateUserWithGoogleOAuth),
);

export default router;
