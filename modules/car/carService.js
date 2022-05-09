import * as carDal from './carDal.js';

export const getCar = (carId, userId) => carDal.getCarById(carId, userId);

export const getCars = (userId) => carDal.getCars(userId);
