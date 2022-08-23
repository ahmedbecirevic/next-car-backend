import { uploadObject } from '../../clients/spacesS3Client.js';
import { createMultipleImages } from './imageDal.js';

// eslint-disable-next-line import/prefer-default-export
export const createImages = async (imageFiles, carId, postId) => {
  const imageUrls = [];
  await Promise.all(imageFiles?.map(async (imageFile) => {
    const { originalname, buffer } = imageFile;
    const image = await uploadObject(originalname, buffer);
    const [data, url] = image;
    if (url) { imageUrls.push(url); }
  }));

  const imageObjectsArray = imageUrls?.map((image) => ({ link: image, carId, postId }));
  const createdImages = await createMultipleImages(imageObjectsArray);

  return createdImages;
};
