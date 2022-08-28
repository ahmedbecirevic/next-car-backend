import { addPost, getAllPosts, getPostById } from './postService.js';

export const getAllPostsForUser = async (req, res) => {
  const posts = await getAllPosts(req.user?.id);

  return res.status(200).json(posts);
};

export const getPost = async (req, res) => {
  const post = await getPostById(req.params?.id);

  return res.status(200).json(post);
};

export const getAllPostsByCar = (req, res) => {
  res.status(200).json('to be implemented');
};

export const addNewPost = async (req, res) => {
  const createdPost = await addPost(req.body);

  return res.status(200).json(createdPost);
};
