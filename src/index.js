import express from 'express';
import home from './modules/home/home';
import errorHandler from './modules/core/errorHandler';
import user from './modules/user/user';
import logger from './modules/core/logger';
import parseResponse from './modules/core/parseResponse';
import cors from './modules/core/cors';
import { routesInfo, routesUser } from './routes';

const app = express();
const PORT = 5000;

logger(app);
parseResponse(app);
cors(app);
routesInfo(app);
routesUser(app);
app.get('/', home);
// app.get('/user', user);
errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
