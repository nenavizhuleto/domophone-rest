import { Request, Response } from 'express';
import { generateAccessToken } from '../../util/jwt';
import { callController } from './call';
import { actionController } from './action';

export const testController = (req: Request, res: Response) => {
	const data = req.body;
	const token = generateAccessToken(data);
	res.json({ token: token });
};

export { callController, actionController };
