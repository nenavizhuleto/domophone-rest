import { Router } from 'express';
import { testController, callController } from '../../controllers/v1';
import { authenticateToken } from '../../middleware/auth';

const TestRouterV1 = Router();
TestRouterV1.get('/test', testController);

const MainRouterV1 = Router();
MainRouterV1.get('/call', authenticateToken, callController);

export { TestRouterV1, MainRouterV1 };
