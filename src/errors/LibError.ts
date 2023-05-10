/** Default error, extend js native error adding error code and capturing stack trace */
class LibError extends Error {
	code: string;

	/**
	 * Create an error
	 * @param {string=} message - The value for error.message
	 * @param {{ code: string=, cause: Error=}=} options - The error code and cause
	 */
	constructor(message = 'Unexpected error', { code = 'LIB_ERROR', cause = null} = {}) {
		super(message, { cause });
		this.code = code;
		Error.captureStackTrace(this, this.constructor);
	}
}

export default LibError;
