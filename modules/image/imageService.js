import { uploadObject } from '../../clients/spacesS3Client.js';
import { createMultipleImages, deleteImageById } from './imageDal.js';

export const createImages = async (imageFiles, carId, postId) => {
  const imageUrls = [];
  await Promise.all(imageFiles?.map(async (imageFile) => {
    const { originalname, buffer } = imageFile;
    const image = await uploadObject(originalname, buffer);
    const [_, url] = image;
    if (url) { imageUrls.push(url); }
  }));

  const imageObjectsArray = imageUrls?.map((image) => ({ link: image, carId, postId }));
  const createdImages = await createMultipleImages(imageObjectsArray);

  return createdImages;
};

export const deleteImage = async (id) => {
  await deleteImageById(id);
};
