import Car from './carModel.js';

// eslint-disable-next-line import/prefer-default-export
export const getCarById = (id) => Car.findByPk(id);
