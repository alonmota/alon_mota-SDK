import { RequestOptions } from "../interfaces/requestOptions.js";

export function formatParams(params: RequestOptions) {
	let queryString = '?';
	const { limit, page, offset, sort, filter } = params;
	if (limit) queryString = queryString.concat(`limit=${limit}&`);
	if (page) queryString = queryString.concat(`page=${page}&`);
	if (offset) queryString = queryString.concat(`offset=${offset}&`);
	if (sort && sort.field) queryString = queryString.concat(`sort=${sort.field}:${sort.descending ? 'desc' : 'asc' }&`);
	if (filter) queryString = queryString.concat(`${filter}&`);

	return queryString.length > 1 ? queryString : '';
}