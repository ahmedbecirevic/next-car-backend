import User from './userModel.js';

// eslint-disable-next-line import/prefer-default-export
export const getUserById = (userId) => User.findByPk(userId);
