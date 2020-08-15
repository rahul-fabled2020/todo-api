import './env';

import express from 'express';
import routes from './routes';
import logger, { logStream } from './utils/logger';
import * as errorHandler from './middlewares/errorHandler';

const app = express();

const APP_PORT =
  (process.env.NODE_ENV === 'test' ? process.env.TEST_APP_PORT : process.env.APP_PORT) || process.env.PORT || '3000';
const APP_HOST = process.env.APP_HOST || '0.0.0.0';

app.set('port', APP_PORT);
app.set('host', APP_HOST);

app.locals.title = process.env.APP_NAME;
app.locals.version = process.env.APP_VERSION;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler.bodyParser);

// API Routes
app.use('/api', routes);

app.get('/', (req, res) => {
  console.log('Root');
  res.json({
    msg: 'Success'
  });
});

// Error Middleware
app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.methodNotAllowed);

app.listen(app.get('port'), app.get('host'), () => {
  logger.info(`Server started at http://${app.get('host')}:${app.get('port')}/api`);
});
