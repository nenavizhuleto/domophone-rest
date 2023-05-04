import { Request, Response } from 'express';
import { APIRequestErr, ActionRequest } from '../../types';

export const actionController = (req: Request, res: Response) => {
	const body = req.body;
	if (!body.hasOwnProperty('type') || !body.hasOwnProperty('payload')) {
		const err: APIRequestErr = {
			result: false,
			message: 'Invalid request body.',
		};
		res.status(405).json(err);
		return;
	}

	const action_request: ActionRequest = {
		type: body.type,
		payload: body.payload,
	};

	res.json({ echo: action_request });
};
