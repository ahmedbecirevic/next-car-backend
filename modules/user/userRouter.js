import express from 'express';
import passport from 'passport';
import config from '../../config.js';
import { generateJwtAndRedirect } from './userController.js';
import errorHandler from '../../utils/errorHandler.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('User base endpoint');
});

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

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
