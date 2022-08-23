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

export const getCarByUserId = (userId, carId) => Car.findOne({
  where: {
    userId,
    id: carId,
  },
});

export const updateCar = (car, id) => Car.update(
  car,
  {
    where: { id },
    returning: true,
  },
);
