import Car from './carModel.js';

export const getCarById = (id) => Car.findByPk(id);

export const getCars = () => Car.findAll();
