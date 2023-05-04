import { Router } from 'express';
import { testController, callController, actionController } from '../../controllers/v1';
import { authenticateToken } from '../../middleware/auth';

const TestRouterV1 = Router();
TestRouterV1.get('/test', testController);

const MainRouterV1 = Router();
MainRouterV1.get('/call', authenticateToken, callController);
MainRouterV1.get('/action', authenticateToken, actionController);

export { TestRouterV1, MainRouterV1 };
