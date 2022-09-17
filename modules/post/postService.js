import * as postDal from './postDal.js';

export const addPost = async (post) => {
  const res = await postDal.createPost(post);

  return res;
};

export const getPostsByCar = (carId) => postDal.getPostsByCarId(carId);

export const getAllPostsByUser = (userId) => postDal.getPosts(userId);

export const getAll = async (page = 0, size = 10) => {
  const limit = size;
  const offset = page * size;
  const posts = await postDal.getAllPosts(offset, limit);

  return posts;
};

export const getPostById = (id) => postDal.getPost(id);

export const getPostIncludeImages = async (id) => {
  const post = await postDal.getPostAndAllImages(id);

  return post[0];
};

export const updatePost = async (post) => {
  // eslint-disable-next-line no-unused-vars
  const [_, updatedPost] = await postDal.updatePost(post) || [];

  return updatedPost[0];
};
