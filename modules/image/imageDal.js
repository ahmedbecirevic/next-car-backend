import Image from './imageModel.js';

export const getImagesByCarId = (carId) => Image.findAll({
  where: {
    carId,
  },
});

export const getImageById = (id) => Image.findByPk(id);

export const createImage = (image) => Image.create(image);

export const createMultipleImages = (images) => Image.bulkCreate(images);
