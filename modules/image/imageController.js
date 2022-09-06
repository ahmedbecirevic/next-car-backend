import * as imageService from './imageService.js';

export const uploadImages = async (req, res) => {
  const images = await imageService.createImages(req?.files, req.query?.carId, req.query?.postId);

  return res.json(images).status(200);
};

export const deleteImage = async (req, res) => {
  await imageService.deleteImage(req.params?.id);

  return res.json().status(204);
};
