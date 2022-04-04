import * as carDal from './carDal.js';

export const getCar = (carId) => carDal.getCarById(carId);

export const getCars = () => carDal.getCars();
