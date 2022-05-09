import Car from './carModel.js';

export const getCarById = (id, userId) => Car.findOne({
  where: {
    id,
    userId,
  },
});

export const getCars = (userId) => Car.findAll({
  where: {
    userId,
  },
});

export const addCar = (car) => Car.create(car);
