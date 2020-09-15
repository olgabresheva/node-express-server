import infoRouter from './modules/info/Routes';
import userRouter from './modules/user/Routes';

export function routesInfo(app) {
  app.use('/info', infoRouter);
}

export function routesUser(app) {
  app.use('/user', userRouter);
}
