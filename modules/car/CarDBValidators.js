import { getCarByUserId } from './carDal.js';

// eslint-disable-next-line import/prefer-default-export
export const checkIfCarBelongsToUser = async (req, res, next) => {
  const carId = req.query?.carId || req.body?.carId;
  if (!carId) return res.status(400).json({ error: 'Missing carId' });
  if (await getCarByUserId(req?.user?.id, carId)) {
    return next();
  }

  return res.status(404).json({ error: 'No result' });
};
