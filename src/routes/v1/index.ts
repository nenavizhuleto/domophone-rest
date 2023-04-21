import { Router } from 'express';
import { testController } from '../../controllers/v1';

const testRouter = Router();

testRouter.get('/test', testController);

export { testRouter };
