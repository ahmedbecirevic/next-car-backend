// import { createImage } from '../image/imageDal.js';
import { createPost, getPostsByCarId, getPosts } from './postDal.js';

export const addPost = async (post, image) => {
  // const createdImage = await createImage(image);
  const res = await createPost(post);

  return res;
};

export const getPostsByCar = (carId) => getPostsByCarId(carId);

export const getAllPosts = (userId) => getPosts(userId);
