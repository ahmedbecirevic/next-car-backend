import jwt from 'jsonwebtoken';
import config from '../config.js';

export const generateAccessToken = (id, email, picture) => jwt.sign(
  {
    id,
    email,
    picture,
  },
  config.JWT_SECRET,
  {
    algorithm: 'HS256',
    expiresIn: config.JWT_EXPIRE,
  },
);

export const verifyAccessToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  let token;

  if (!authHeader) {
    token = res?.locals?.cookie?.token;
  } else {
    // eslint-disable-next-line prefer-destructuring
    token = authHeader.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ message: 'You are unauthorized' });
  }

  return jwt.verify(token, config.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token invalid' });
    }
    req.user = user;

    return next();
  });
};

export const cookieParser = (req, res, next) => {
  const { headers: { cookie } } = req;

  if (cookie) {
    const values = cookie.split(';').reduce((prev, item) => {
      const data = item.trim().split('=');

      return { ...prev, [data[0]]: data[1] };
    }, {});
    res.locals.cookie = values;
  } else res.locals.cookie = {};
  next();
};
