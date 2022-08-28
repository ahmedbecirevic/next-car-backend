// import { createImage } from '../image/imageDal.js';
import * as postDal from './postDal.js';

export const addPost = async (post, image) => {
  // const createdImage = await createImage(image);
  const res = await postDal.createPost(post);

  return res;
};

export const getPostsByCar = (carId) => postDal.getPostsByCarId(carId);

export const getAllPosts = (userId) => postDal.getPosts(userId);

export const getPostById = (id) => postDal.getPost(id);
