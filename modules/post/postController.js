import { responseOk } from '../../utils/responses.js';
import {
  addPost, getAll, getAllPostsByUser, getPostById, getPostIncludeImages, updatePost,
} from './postService.js';

export const getAllPosts = async (req, res) => {
  const { page, size } = req.query;
  const posts = await getAll(page, size);

  return res.status(200).json(posts);
};

export const getAllPostsForUser = async (req, res) => {
  const posts = await getAllPostsByUser(req.user?.id);

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

export const getPostWithImages = async (req, res) => {
  const post = await getPostIncludeImages(req.params.id);

  return res.status(200).json(post);
};

export const updateCarById = async (req, res) => {
  const updatedPost = await updatePost(req.body);

  return responseOk(res, updatedPost);
};
