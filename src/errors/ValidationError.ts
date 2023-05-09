import { LibError } from "./index.js";

class ValidationError extends LibError {
	constructor(message) {
		super(message, { code: 'VALIDATION_ERROR' });
	}
}

export default ValidationError;
