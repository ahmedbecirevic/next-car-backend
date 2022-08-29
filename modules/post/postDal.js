import Car from '../car/carModel.js';
import Image from '../image/imageModel.js';
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

export const getPost = (id) => Post.findOne({ where: { id } });

export const getPostAndAllImages = (id) => Post.findAll({ where: { id }, include: Image });
