import { generateAccessToken } from '../../middlewares/auth.js';
import config from '../../config.js';

// eslint-disable-next-line import/prefer-default-export
export const generateJwtAndRedirect = async (req, res) => {
  const { user } = req;
  const token = generateAccessToken(user?.id, user?.email);
  res.cookie('x-auth-cookie', token, {
    httpOnly: true,
    secure: config.NODE_ENV === 'production',
  });

  res.redirect(`${config.FRONTEND_ORIGIN}/login/success`);
};
