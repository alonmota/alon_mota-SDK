import 'reflect-metadata';
import { MoviesClient } from "./resources/movies/movies.core.js";
import { QuotesClient } from "./resources/quotes/quotes.core.js";

export class LotrClient {
	private token: string;
	movies: MoviesClient;
	quotes: QuotesClient;

	/**
	 * connect
	 * 
 	 * @param {string} token - The token retrieved at login
	 * @return {LotrClient} The x value.
	 */
	constructor (token: string) {
		this.token = token;
		this.movies = new MoviesClient(this.token);
		this.quotes = new QuotesClient(this.token);
	}
}
