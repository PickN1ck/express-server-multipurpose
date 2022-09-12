import homeRouter from '../components/home/Routes';

export default function routes(app) {
  app.use('/', homeRouter);
}
