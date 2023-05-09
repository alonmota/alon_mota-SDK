// Base error class, make sure all errors extends from this class, as it will provide
// support to status codes and stack trace
class ApiError extends Error {
	code: string;
	
	constructor(message = 'Unexpected error', { code = 'LIB_ERROR', cause = null} = {}) {
		super(message, { cause });
		this.code = code;
		Error.captureStackTrace(this, this.constructor);
	}
}

export default ApiError;
