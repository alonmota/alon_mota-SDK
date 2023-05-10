/**
 * Responses - The default response returned by the api
 * @typedef {Object} RequestOptions
 * @property {*} docs - Documents that match the search up to limit
 * @property {number} total - Total number of documents that match
 * @property {number} limit - Limit used in the query
 * @property {number} offset - Offset used in the query
 * @property {number} page - Current page
 * @property {number} pages - Total amount of pages
 */
export class Responses<T> {
	docs: Array<T>;
	total: number;
	limit: number;
	offset: number;
	page: number;
	pages: number;
}