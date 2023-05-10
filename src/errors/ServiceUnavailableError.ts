import { LibError } from "./index.js";


/** Error to represent that the Lord of the Rings API required for this sdk could not be reached */
class ServiceUnavailableError extends LibError {

	/**
	 * Constructor
	 * @param {string=} message - A place to pass along a custom message if needed
	 */
	constructor(message = 'Api Unavailable') {
		super(message, { code: 'SERVICE_UNAVAILABLE' });
	}
}

export default ServiceUnavailableError;
