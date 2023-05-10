import { AxiosInstance } from "axios";
import { Quotes, RequestOptions, Responses } from "../../interfaces/index.js";
import { formatParams, LocalAxios } from "../../common/index.js";
import ServiceUnavailableError from "../../errors/ServiceUnavailableError.js";

/** Responsible for handling all requests that are directed to /quote endpoint */
export class QuotesClient {
	private http: AxiosInstance;

	/**
	 * Constructor
	 * @param {string} token - Auth token obtained after login to https://the-one-api.dev/login, also se https://the-one-api.dev/sign-up for sing up
	 */
	constructor (token?: string) {
		this.http = LocalAxios.instance<Quotes>(token);
	}

	/**
	 * Searches for all quotes available
	 * @param {RequestOptions=} options - Options for filtering out quotes
	 * @returns {Promise<Responses<Quotes>>} Quotes that match the search
	 * @example
	 *     getAll()
	 * @example
	 *     getAll({ page: 2, limit: 100, offset: 3, sort: { field: 'name', descending: true}, filter: 'academyAwardWins>0'})
	 */
	public async getAll(options?: RequestOptions): Promise<Responses<Quotes>> {
		let query = '';
		if (options) {
			query = formatParams(options);
		}
		try {
			const { data } = await this.http.get(`quote${query}`);
			return data;
		} catch (error) {
			throw new ServiceUnavailableError();
		}
	}

	
	/**
	 * Get a quote by id
	 * @param {string} id - The quote id
	 * @returns {Promise<Movies>} Quote with the requested id
	 * @example
	 *     getQuote('5cd96e05de30eff6ebcce7e9')
	 */
	public async getQuote(id: string): Promise<Quotes> {
		const { data } = await this.http.get(`quote/${id}`);
		return data.docs[0]
	}
}
