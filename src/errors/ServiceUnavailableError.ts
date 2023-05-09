import { LibError } from "./index.js";

class ServiceUnavailableError extends LibError {
	constructor(message = 'Api Unavailable') {
		super(message, { code: 'SERVICE_UNAVAILABLE' });
	}
}

export default ServiceUnavailableError;
