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

describe('Car Tests', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });
  afterEach(() => sandbox.restore());

  describe('GET /cars', () => {
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

    it('Responds with array of cars, 200 OK.', async () => {
      sandbox.stub(Car, 'findAll').returns(cars);
      await request(app)
        .get('/cars')
        .expect(200, cars);
    });

    it('Responds with 422, id param invalid.', async () => {
      await request(app)
        .get('/cars/23f')
        .expect(422);
    });
  });
});
