import { Request, Response } from 'express';
import { CallRequest, APIRequestErr } from '../../types';

export const callController = (req: Request, res: Response) => {
	/*
    1. make request to local api
    2. required data:
        - token
        - calldata: endpoint? number? 
    3. fetch response from local api
    4. check errors
    5. make response
    */

	const body = req.body;
	console.log(body);
	if (!body.hasOwnProperty('caller_id') || !body.hasOwnProperty('endpoint')) {
		const err: APIRequestErr = {
			result: false,
			message: 'Invalid request body.',
		};
		res.status(401).json(err);
		return;
	}
	const call_request: CallRequest = {
		calldata: {
			caller_id: body.caller_id,
			endpoint: body.endpoint,
		},
	};

	res.json({ echo: call_request });
};
