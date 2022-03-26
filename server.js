import express from "express";
import logger from './logger.js';
import envVar, { validateEnvironmentVariables } from './config.js';

validateEnvironmentVariables();

const app = express();
const port = envVar.PORT;

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => {
  logger.info(`App listening at http://localhost:${port}`);
});

export default app;
