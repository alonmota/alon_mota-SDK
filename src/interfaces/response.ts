export class Responses<T> {
	docs: Array<T>;
	total: number;
	limit: number;
	offset: number;
	page: number;
	pages: number;
}