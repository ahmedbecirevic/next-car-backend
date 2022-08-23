import { generateAccessToken } from '../../middlewares/auth.js';
import config from '../../config.js';
import { getUserDetails } from './userService.js';

// eslint-disable-next-line import/prefer-default-export
export const generateJwtAndRedirect = async (req, res) => {
  const { user } = req;
  const token = generateAccessToken(user?.id, user?.email, user?.picture);

  res.redirect(`${config.FRONTEND_ORIGIN}/?token=${token}`);
};

export const getDetails = async (req, res) => {
  const user = await getUserDetails(req?.user?.id);

  return res.json(user).status(200);
};
