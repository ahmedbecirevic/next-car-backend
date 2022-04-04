import express from 'express';
import errorHandler from '../../utils/errorHandler.js';
import { getCar, getCars } from './carController.js';
import { getCarByIdValidators } from './carValidators.js';
import validationMiddleware from '../../middlewares/validationMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Car:
 *      type: object
 *      properties:
 *        id:
 *          type: int
 *          description: ID of the car
 *        fuelType:
 *          type: string
 *          description: Type of fuel for the car
 *        mileage:
 *          type: double
 *          description: Mileage of the car
 *        productionYear:
 *          type: string
 *          description: Production for the car
 *        description:
 *          type: string
 *          description: Description for the car
 *        vin:
 *          type: string
 *          description: VIN of the car
 *        horsePower:
 *          type: int
 *          description: Horse power of the car
 *        engineDisplacement:
 *          type: double
 *          description: Engine size of the car
 *      example:
 *        id: 345
 *        fuelType: diesel
 */

/**
  * @swagger
  * tags:
  *   name: Cars
  *   description: The car managing API
  */

/**
 * @swagger
 * /cars:
 *   get:
 *     summary: Returns the list of all the cars
 *     tags: [Cars]
 *     responses:
 *       200:
 *         description: The list of the cars
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Car'
 */
router.get(
  '/',
  errorHandler(getCars),
);

/**
 * @swagger
 * /cars/{id}:
 *  get:
 *    summary: Get car by ID.
 *    tags: [Cars]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *         type: int
 *         required: true
 *         description: The car id
 *    responses:
 *      200:
 *          description: The car description by id
 *          contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 *      404:
 *          description: The car was not found
 *      422:
 *          description: Bad parameters
 */
router.get(
  '/:id',
  getCarByIdValidators,
  validationMiddleware,
  errorHandler(getCar),
);

export default router;
