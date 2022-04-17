import express from 'express';
import passport from 'passport';
import logger from '../../logger.js';

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
      failureMessage: 'Cannot login!',
      failureRedirect: 'http://localhost:3000/login/error',
      successRedirect: 'http://localhost:3000/login/success',
    },
  ),
  (req, res) => {
    logger.warn('User: ', req.user);
    res.send('Thank you for signing in!');
  },
);

export default router;
