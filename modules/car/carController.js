import { responseNotFound, responseOk } from '../../utils/responses.js';
import { getCar, getCars } from './carService.js';

export const getAllCars = async (req, res) => {
  const cars = await getCars();

  return responseOk(res, cars);
};

export const getCarFromIdParam = async (req, res) => {
  const { id } = req.params;
  const car = await getCar(id);

  if (!car) {
    return responseNotFound(res);
  }

  return responseOk(res, car);
};
