import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';

export const authenticateToken = (req: Request, res: Response, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (token == null) return res.sendStatus(401);

	jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, payload: any) => {
		console.log(err);

		if (err) return res.sendStatus(403);
		Object.defineProperty(req, 'user', {
			value: payload,
		});

		next();
	});
};
