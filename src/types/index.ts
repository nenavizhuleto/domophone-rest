export interface CallRequest {
	calldata: {
		caller_id: String;
		endpoint: String;
	};
}

export interface APIRequestErr {
	result: Boolean;
	message: String;
	status?: number;
}
