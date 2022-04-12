import User from './userModel.js';

export const getUserById = (userId) => User.findByPk(userId);

export const getUserByGoogleId = (googleId) => User.findOne({
  where: {
    googleId,
  },
});

export const getUserByEmail = (email) => User.findOne({
  where: {
    email,
  },
});
