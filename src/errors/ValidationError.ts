import { LibError } from "./index.js";

/** Error to represent data some data that was informed to the clint is incorrect or malformed */
class ValidationError extends LibError {

	/**
	 * Constructor
	 * @param {string} message - Must provide which value did not pass the validation
	 */
	constructor(message) {
		super(message, { code: 'VALIDATION_ERROR' });
	}
}

export default ValidationError;
