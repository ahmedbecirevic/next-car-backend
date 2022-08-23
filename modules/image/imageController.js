import { createImages } from './imageService.js';

// eslint-disable-next-line import/prefer-default-export
export const uploadImages = async (req, res) => {
  const images = await createImages(req?.files, req.query?.carId, req.query?.postId);

  return res.status(200).json(images);
};
