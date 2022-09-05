import { getUserById } from './userDal.js';

// eslint-disable-next-line import/prefer-default-export
export const getUserDetails = async (userId) => {
  const {
    email, profilePictureUrl, phoneNumber, createdAt, id,
  } = await getUserById(userId) || {};

  return {
    email, profilePictureUrl, phoneNumber, createdAt, id,
  };
};
