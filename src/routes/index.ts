import { Router } from 'express';

import { testRouter } from './v1';

const APIRouterV1 = Router();

APIRouterV1.use('/v1', testRouter);

export { APIRouterV1 };
