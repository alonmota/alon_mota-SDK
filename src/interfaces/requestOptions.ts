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