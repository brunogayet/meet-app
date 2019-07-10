import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

/**
 * Middlewares
 */
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

/**
 * Control token authentication (JWT) from here
 */
routes.use(authMiddleware);

routes.put('/users', UserController.update);

module.exports = routes;
