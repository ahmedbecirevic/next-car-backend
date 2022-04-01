import { responseNotFound, responseOk } from '../../utils/responses.js';
import { getCar } from './carService.js';

// eslint-disable-next-line import/prefer-default-export
export const getCarFromIdParam = async (req, res) => {
  const { carId } = req.params;
  const car = await getCar(carId);

  if (!car) {
    return responseNotFound(res);
  }

  return responseOk(res, car);
};
