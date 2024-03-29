import Car from '../car/carModel.js';
import Image from '../image/imageModel.js';
import PurchaseHistory from '../purchaseHistory/purchaseHistoryModel.js';
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

export const getAllPosts = (offset, limit) => Post.findAndCountAll({
  offset,
  limit,
  order: [['createdAt', 'DESC']],
  include: [Image, Car, PurchaseHistory],
});

export const getPost = (id) => Post.findOne({ where: { id } });

export const getPostAndAllImages = (id) => Post.findAll({
  where: { id },
  include: [Image, Car],
});

export const updatePost = (post) => Post.update(post, {
  where: { id: post?.id },
  returning: true,
});
