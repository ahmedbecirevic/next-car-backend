import Image from './imageModel.js';

export const getImagesByCarId = (carId) => Image.findAll({
  where: {
    carId,
  },
});

export const getImageById = (id) => Image.findByPk(id);
