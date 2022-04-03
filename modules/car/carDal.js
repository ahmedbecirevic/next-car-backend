import Car from './carModel.js';

export const getCarByIdDb = (id) => Car.findByPk(id);

export const getCarsDb = () => Car.findAll();
