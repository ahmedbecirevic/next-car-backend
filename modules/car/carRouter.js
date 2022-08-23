import express from 'express';
import errorHandler from '../../utils/errorHandler.js';
import {
  getCar, getCars, addCar, updateCar,
} from './carController.js';
import { getCarByIdValidators, addCarBodyValidators } from './carValidators.js';
import validationMiddleware from '../../middlewares/validationMiddleware.js';
import { cookieParser, verifyAccessToken } from '../../middlewares/auth.js';

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
  cookieParser,
  verifyAccessToken,
  errorHandler(getCars),
);

//  *          required:
//  *            - userName
//  *          properties:
//  *            userName:
//  *              type: string

/**
 * @swagger
 * /cars:
 *   post:
 *     summary: Creates new car.
 *     tags: [Cars]
 *     parameters:
 *        - in: body
 *          name: car
 *          description: The car to create.
 *          schema:
 *            type: object
 *            properties:
 *              vin:
 *                type: string
 *                example: WDCGG8HB0AF462890
 *              mileage:
 *                type: double
 *                example: 200200
 *              fuelType:
 *                type: string
 *                example: diesel
 *              productionYear:
 *                type: date
 *                example: 2010
 *              description:
 *                type: string
 *                example: BMW M2 well taken care of.
 *              horsePower:
 *                type: int
 *                example: 450
 *              engineDisplacement:
 *                type: double
 *                example: 3.0
 *     responses:
 *       200:
 *         description: Newly created car.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Car'
 */
router.post(
  '/',
  addCarBodyValidators,
  validationMiddleware,
  cookieParser,
  verifyAccessToken,
  errorHandler(addCar),
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
  cookieParser,
  verifyAccessToken,
  errorHandler(getCar),
);

router.put(
  '/',
  addCarBodyValidators,
  validationMiddleware,
  cookieParser,
  verifyAccessToken,
  errorHandler(updateCar),
);

export default router;
