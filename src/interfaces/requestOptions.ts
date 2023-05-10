/**
 * RequestOptions - Options for pagination, sorting and filtering that are common to all requests
 * @typedef {Object} RequestOptions
 * @property {number=} limit - Max amount of documents in response
 * @property {number=} page - Page to search
 * @property {number=} offset - Number of documents to skip
 * @property {{field: number=, descending: boolean=}=} sort - The field used for sorting and if it should sort ascending or descending
 * @property {string=} filter - A string representing a filter option
 */
export class RequestOptions {
	limit?: number;
	page?: number;
	offset?: number;
	sort?: {
		field?: string;
		descending?: boolean;
	};
	filter?: string;
}