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
});
