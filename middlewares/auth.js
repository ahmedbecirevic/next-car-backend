import jwt from 'jsonwebtoken';
import config from '../config.js';

export const generateAccessToken = (id, email) => jwt.sign(
  {
    id,
    email,
  },
  config.JWT_SECRET,
  {
    algorithm: 'HS256',
    expiresIn: config.JWT_EXPIRE,
  },
);

export const verifyAccessToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'You are unauthorized' });
  }

  const token = authHeader && authHeader.split(' ')[1];

  return jwt.verify(token, config.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token invalid' });
    }
    req.user = user;

    return next();
  });
};
