import { responseNotFound, responseOk } from '../../utils/responses.js';
// import { getCar, getCars } from './carService.js';
import * as carService from './carService.js';

export const getCars = async (req, res) => {
  const cars = await carService.getCars(req?.user?.id);

  return responseOk(res, cars);
};

export const getCar = async (req, res) => {
  const { id } = req.params;
  const car = await carService.getCar(id, req?.user?.id);

  if (!car) {
    return responseNotFound(res);
  }

  return responseOk(res, car);
};

export const addCar = async (req, res) => {
  const userId = req?.user?.id;
  const car = req.body;
  car.userId = userId;
  const addedCar = await carService.addCar(car);

  return responseOk(res, addedCar);
};

export const updateCar = async (req, res) => {
  const car = req.body;

  const updatedCar = await carService.updateCar(car);

  return responseOk(res, updatedCar);
};
