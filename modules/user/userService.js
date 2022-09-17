import { getUserById, updateUser } from './userDal.js';

export const getUserDetails = async (userId) => {
  const {
    email, profilePictureUrl, phoneNumber, createdAt, id, displayName,
  } = await getUserById(userId) || {};

  return {
    email, profilePictureUrl, phoneNumber, createdAt, id, displayName,
  };
};

export const updateUserNumber = async (number, userId) => {
  const existingUser = await getUserById(userId);
  // eslint-disable-next-line no-unused-vars
  const [_, updatedUser] = await updateUser({ ...existingUser.dataValues, phoneNumber: number });

  const {
    email, profilePictureUrl, phoneNumber, createdAt, id, displayName,
  } = updatedUser[0] || {};

  return {
    email, profilePictureUrl, phoneNumber, createdAt, id, displayName,
  };
};
