import { getCarByIdDb, getCarsDb } from './carDal.js';

export const getCar = (carId) => getCarByIdDb(carId);

export const getCars = () => getCarsDb();
