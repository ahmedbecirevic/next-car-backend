import { responseNotFound, responseOk } from '../../utils/responses.js';
// import { getCar, getCars } from './carService.js';
import * as carService from './carService.js';

export const getCars = async (req, res) => {
  const cars = await carService.getCars();

  return responseOk(res, cars);
};

export const getCar = async (req, res) => {
  const { id } = req.params;
  const car = await carService.getCar(id);

  if (!car) {
    return responseNotFound(res);
  }

  return responseOk(res, car);
};
