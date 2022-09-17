import { generateAccessToken } from '../../middlewares/auth.js';
import config from '../../config.js';
import { getUserDetails, updateUserNumber } from './userService.js';
import { responseOk } from '../../utils/responses.js';

export const generateJwtAndRedirect = async (req, res) => {
  const { user } = req;
  const token = generateAccessToken(user?.id, user?.email, user?.picture);

  res.redirect(`${config.FRONTEND_ORIGIN}/?token=${token}`);
};

export const getDetails = async (req, res) => {
  const user = await getUserDetails(req?.user?.id);

  return res.json(user).status(200);
};

export const updateUserPhoneNumber = async (req, res) => {
  const updatedUser = await updateUserNumber(req.body?.phoneNumber, req?.user?.id);

  return responseOk(res, updatedUser);
};
