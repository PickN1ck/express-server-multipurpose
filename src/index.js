import express from 'express';
import errorHandler from './core/errorHandler';
import logger from './core/logger';
import routes from './core/routes';
import parseResponse from './core/paseResponse';
import cors from './core/cors';
const app = express();
const PORT = 3000;

logger(app);
parseResponse(app);
cors(app);
routes(app);

errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
