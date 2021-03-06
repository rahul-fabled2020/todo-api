import { Router } from 'express';

import userRoutes from './routes/userRoutes';
import todoRoutes from './routes/todoRoutes';
import authRoutes from './routes/authRoutes';
import authenticate from './middlewares/authenticate';

/**
 * Contains all API routes for the application.
 */
const router = Router();

/**
 * GET /api
 */
router.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version
  });
});

router.use('/users', authenticate, userRoutes);
router.use('/todos', authenticate, todoRoutes);
router.use('/auth', authRoutes);

export default router;
