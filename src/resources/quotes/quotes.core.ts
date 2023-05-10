import { AxiosInstance } from "axios";
import LocalAxios from "../../common/axios.js";
import { Quotes, RequestOptions } from "../../interfaces/index.js";
import { formatParams } from "../../common/index.js";

export class QuotesClient {

	
	private http: AxiosInstance;

	constructor (token?: string) {
		this.http = LocalAxios.instance<Quotes>(token);
	}

	/**
	 * getAll
	 */
	public async getAll(options?: RequestOptions) {
		let query = '';
		if (options) {
			query = formatParams(options);
		}
		return this.http.get(`quote${query}`)
	}

	
	/**
	 * getQuote
	 */
	public getQuote(id: string) {
		return this.http.get(`quote/${id}`)
	}
}
