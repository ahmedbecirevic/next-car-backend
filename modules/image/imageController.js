import * as imageService from './imageService.js';

export const uploadImages = async (req, res) => {
  const images = await imageService.createImages(req?.files, req.query?.carId, req.query?.postId);

  return res.status(200).json(images);
};

export const deleteImage = async (req, res) => {
  await imageService.deleteImage(req.params?.id);

  return res.status(204).json();
};
