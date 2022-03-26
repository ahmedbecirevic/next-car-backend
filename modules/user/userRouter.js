import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('User base endpoint');
});

export default router;
