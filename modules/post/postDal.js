import Car from '../car/carModel.js';
import Post from './postModel.js';

export const createPost = (post) => Post.create(post);

export const getPostsByCarId = (carId) => Post.findAll({
  where: {
    carId,
  },
});

export const getPosts = (userId) => Post.findAll({
  include: {
    model: Car,
    where: {
      userId,
    },
  },
});
