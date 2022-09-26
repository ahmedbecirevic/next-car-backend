import request from 'supertest';
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from 'mocha';
import sinon from 'sinon';

import app from '../server.js';
import Post from '../modules/post/postModel.js';
import { generateAccessToken } from '../middlewares/auth.js';
import Car from '../modules/car/carModel.js';

describe('Post Tests', () => {
  let sandbox;
  const token = generateAccessToken(1, 'ahmedtest@gmail.com', 'image_url');

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });
  afterEach(() => sandbox.restore());

  const posts = {
    count: 11,
    rows: [{
      id: 1,
      condition: 'NEW',
      location: 'Sarajevo',
      title: 'Selling Golf 8',
      price: 40000,
      createdAt: '2022-09-11T16:12:40.666Z',
      updatedAt: '2022-09-11T16:12:40.666Z',
      carId: 10,
    }],
  };

  const post = {
    id: 1,
    condition: 'NEW',
    location: 'Sarajevo',
    title: 'Selling Golf 8',
    price: 40000,
    createdAt: '2022-09-11T16:12:40.666Z',
    updatedAt: '2022-09-11T16:12:40.666Z',
    carId: 10,
  };

  describe('GET /posts', () => {
    it('Responds with array of posts, 200 OK.', async () => {
      sandbox.stub(Post, 'findAndCountAll').returns(posts);
      await request(app)
        .get('/posts')
        .set('Cookie', [`token=${token}`])
        .expect(200, posts);
    });

    it('Responds with error unauthorized, 401', async () => {
      await request(app)
        .get('/posts')
        .expect(401);
    });
  });

  describe('GET /posts/:id', () => {
    it('Responds with a post, 200 OK.', async () => {
      sandbox.stub(Post, 'findOne').returns(post);
      await request(app)
        .get(`/posts/${post.id}`)
        .set('Cookie', [`token=${token}`])
        .expect(200, post);
    });

    it('Responds with error unauthorized, 401', async () => {
      await request(app)
        .get(`/posts/${post.id}`)
        .expect(401);
    });

    it('Responds with error - id param invalid, 422', async () => {
      await request(app)
        .get('/posts/invalid')
        .set('Cookie', [`token=${token}`])
        .expect(422);
    });
  });

  describe('GET /posts/user', () => {
    const postAndCar = [{
      id: 1,
      condition: 'USED',
      location: 'Sarajevo',
      title: 'Used M3 For sale',
      price: 70000,
      createdAt: '2022-09-24T20:56:37.016Z',
      updatedAt: '2022-09-24T20:56:37.016Z',
      carId: 1,
      car: {
        id: 1,
        fuelType: 'Petrol',
        mileage: 40000,
        productionYear: 2021,
        description: 'BMW M3',
        vin: 'WDD2462001N047746',
        horsePower: 510,
        engineDisplacement: 3,
        createdAt: '2022-09-20T17:49:29.680Z',
        updatedAt: '2022-09-20T17:49:29.680Z',
        userId: 1,
      },
    }];

    it('Responds with array of posts for a user', async () => {
      sandbox.stub(Post, 'findAll').returns(postAndCar);
      await request(app)
        .get('/posts/user')
        .set('Cookie', [`token=${token}`])
        .expect(200, postAndCar);
    });

    it('Responds with error unauthorized, 401', async () => {
      await request(app)
        .get('/posts/user')
        .expect(401);
    });
  });

  describe('Post /posts', () => {
    const postToCreate = {
      condition: 'NEW',
      location: 'Sarajevo',
      title: 'Selling Golf 8',
      price: 40000,
      createdAt: '2022-09-11T16:12:40.666Z',
      updatedAt: '2022-09-11T16:12:40.666Z',
      carId: 10,
    };

    it('Responds with added post, 200 OK', async () => {
      sandbox.stub(Post, 'create').returns({ ...postToCreate, id: 1 });
      sandbox.stub(Car, 'findOne').returns({ id: 2 });
      await request(app)
        .post('/posts')
        .send(postToCreate)
        .set('Cookie', [`token=${token}`])
        .expect(200, { ...postToCreate, id: 1 });
    });
  });
});
