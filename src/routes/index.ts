import { Router } from 'express';

import { TestRouterV1, MainRouterV1 } from './v1';

const APIRouterV1 = Router();

APIRouterV1.use('/v1', TestRouterV1);
APIRouterV1.use('/v1', MainRouterV1);

export { APIRouterV1 };
