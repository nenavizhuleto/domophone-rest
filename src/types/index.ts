export interface CallRequest {
	calldata: {
		caller_id: String;
		endpoint: String;
	};
}

export enum ActionType {
	CANCEL_CALL = 'CANCEL_CALL',
	ACCEPT_CALL = 'ACCEPT_CALL',
	OPEN_DOOR = 'OPEN_DOOR',
}

export interface ActionRequest {
	type: ActionType;
	payload: Object;
}

export interface APIRequestErr {
	result: Boolean;
	message: String;
	status?: number;
}
