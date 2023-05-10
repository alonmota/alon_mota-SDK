import { AxiosInstance } from "axios";
import { LocalAxios, formatParams } from "../../common/index.js";
import { RequestOptions, Movies, Responses, Quotes } from "../../interfaces/index.js";
import { ServiceUnavailableError } from "../../errors/index.js";


/** Responsible for handling all requests that are directed to /movie endpoint */
export class MoviesClient {
	private http: AxiosInstance;
	
	/**
	 * Constructor
	 * @param {string} token - Auth token obtained after login to https://the-one-api.dev/login, also se https://the-one-api.dev/sign-up for sing up
	 */
	constructor (token: string) {
		this.http = LocalAxios.instance<Movies>(token);
	}

	/**
	 * Searches for all movies available
	 * @param {RequestOptions=} options - Options for filtering out movies
	 * @returns {Promise<Responses<Movies>>} Movies that match the search
	 * @example
	 *     getAll()
	 * @example
	 *     getAll({ page: 2, limit: 100, offset: 3, sort: { field: 'name', descending: true}, filter: 'academyAwardWins>0'})
	 */
	public async getAll(options?: RequestOptions): Promise<Responses<Movies>> {
		let query = '';
		if (options) {
			query = formatParams(options);
		}
		try {
			const { data } = await this.http.get(`movie${query}`);
			return data;
		} catch (error) {
			throw new ServiceUnavailableError();
		}
	}

	
	/**
	 * getMovie - Get a movie by id
	 * @param {string} id - The movie id
	 * @returns {Promise<Movies>} Movie with the requested id
	 * @example
	 *     getMovie('5cd95395de30eff6ebccde5d')
	 */
	public async getMovie(id: string): Promise<Movies> {
		const { data } = await this.http.get(`movie/${id}`);
		return data.docs[0]
	}

	/**
	 * getMovieQuotes - Searches for all quotes in a movie
	 * @param {string} id - The movie id
	 * @param {RequestOptions=} options - Options for filtering out quotes
	 * @returns {Promise<Responses<Quotes>>} Movies that match the search
	 * @example
	 *     getMovieQuotes('5cd95395de30eff6ebccde5d')
	 * @example
	 *     getMovieQuotes('5cd95395de30eff6ebccde5d', { page: 2, limit: 100, offset: 3, sort: { field: 'name', descending: true}, filter: 'academyAwardWins>0'})
	 */
	public async getMovieQuotes(id: string, options?: RequestOptions): Promise<Responses<Quotes>> {
		let query = '';
		if (options) {
			query = formatParams(options);
		}
		try {
			const { data } = await this.http.get(`movie/${id}/quote${query}`);
			return data;
		} catch (error) {
			throw new ServiceUnavailableError();
		}
	}

}
