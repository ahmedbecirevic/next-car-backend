import * as carDal from './carDal.js';

export const getCar = (carId, userId) => carDal.getCarById(carId, userId);

export const getCars = (userId) => carDal.getCars(userId);

export const addCar = (car) => carDal.addCar(car);

export const updateCar = async (car) => {
  const { id } = car || {};

  const [affectedRows, updatedCar] = await carDal.updateCar(car, id);

  return updatedCar[0];
};
