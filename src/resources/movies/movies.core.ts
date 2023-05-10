import { AxiosInstance } from "axios";
import { LocalAxios, formatParams } from "../../common/index.js";
import { RequestOptions } from "../../interfaces/requestOptions.js";
import { Movies } from "../../interfaces/movies.js";

export class MoviesClient {

	private http: AxiosInstance;

	constructor (token?: string) {
		this.http = LocalAxios.instance<Movies>(token);
	}

	/**
	 * getAll
	 */
	public async getAll(options?: RequestOptions) {
		let query = '';
		if (options) {
			query = formatParams(options);
		}
		return this.http.get(`movie${query}`)
	}

	
	/**
	 * getMovie
	 */
	public getMovie(id: string) {
		return this.http.get(`movie/${id}`)
	}

	/**
	 * getMovieQuotes
	 */
	public getMovieQuotes(id: string, options?: RequestOptions) {
		let query = '';
		if (options) {
			query = formatParams(options);
		}
		return this.http.get(`movie/${id}/quote${query}`)
	}

}
