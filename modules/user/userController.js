import jwt from 'jsonwebtoken';
import { getUserByEmail } from './userDal.js';
import config from '../../config.js';

// eslint-disable-next-line import/prefer-default-export
export const authenticateUserWithGoogleOAuth = async (req, res) => {
  if (!req.user) {
    return res.status(400).send('Authentication failed!');
  }
  console.log('in the auth controller');
  const { email } = req.user;
  const user = await getUserByEmail(email);
  const token = jwt.sign({ id: user?.id, email }, config.JWT_SECRET);

  return res.status(200).send({ token, user });
};
