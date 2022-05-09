import logger from '../../logger.js';
import { responseNotFound, responseOk } from '../../utils/responses.js';
// import { getCar, getCars } from './carService.js';
import * as carService from './carService.js';

export const getCars = async (req, res) => {
  logger.info(JSON.stringify(res.locals.cookie));
  const cars = await carService.getCars(req?.user?.id);

  if (!cars || cars?.length === 0) {
    return responseNotFound(res);
  }

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
