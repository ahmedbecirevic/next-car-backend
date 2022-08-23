import { getUserById } from './userDal.js';

// eslint-disable-next-line import/prefer-default-export
export const getUserDetails = async (id) => {
  const {
    email, profilePictureUrl, phoneNumber, createdAt,
  } = await getUserById(id) || {};

  return {
    email, profilePictureUrl, phoneNumber, createdAt,
  };
};
