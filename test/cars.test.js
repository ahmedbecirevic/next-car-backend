import request from 'supertest';
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from 'mocha';
import sinon from 'sinon';

import app from '../server.js';
import Car from '../modules/car/carModel.js';
import { generateAccessToken } from '../middlewares/auth.js';

describe('Car Tests', () => {
  let sandbox;
  const token = generateAccessToken(1, 'ahmedtest@gmail.com', 'image_url');
  const cars = [
    {
      id: 1,
      fuelType: 'diesel',
      mileage: 230000,
    },
    {
      id: 2,
      fuelType: 'diesel',
      mileage: 230000,
    },
  ];

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });
  afterEach(() => sandbox.restore());

  describe('GET /cars', () => {
    it('Responds with array of cars, 200 OK.', async () => {
      sandbox.stub(Car, 'findAll').returns(cars);
      await request(app)
        .get('/cars')
        .set('Cookie', [`token=${token}`])
        .expect(200, cars);
    });

    it('Responds with error unauthorized, 401', async () => {
      await request(app)
        .get('/cars')
        .expect(401);
    });
  });

  describe('GET /cars/:id', () => {
    it('Responds with car, 200 OK.', async () => {
      sandbox.stub(Car, 'findOne').returns(cars[0]);
      await request(app)
        .get(`/cars/${cars[0].id}`)
        .set('Cookie', [`token=${token}`])
        .expect(200, cars[0]);
    });

    it('Responds with error - id param invalid, 422', async () => {
      await request(app)
        .get('/cars/23f')
        .expect(422);
    });

    it('Responds with error unauthorized, 401', async () => {
      await request(app)
        .get(`/cars/${cars[0].id}`)
        .expect(401);
    });
  });
});
