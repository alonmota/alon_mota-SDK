import 'reflect-metadata';
import { MoviesClient } from "./resources/movies/movies.core.js";
import { QuotesClient } from "./resources/quotes/quotes.core.js";

/** Provides you and interface for connecting to all clients within this sdk */
export class LotrClient {
	private token: string;

	_movies: MoviesClient;
	_quotes: QuotesClient;

	/**
	 * constructor
 	 * @param {string} token - The token retrieved at login
	 * @return {LotrClient} The instance for LotrClient
	 */
	constructor (token: string) {
		this.token = token;
		this._movies = new MoviesClient(this.token);
		this._quotes = new QuotesClient(this.token);
	}

	/**
	 * movies is a client responsible for handling movie requests
	 * @type {MoviesClient}
	 */
	get movies(): MoviesClient {
		return this._movies;
	}

	

	/**
	 * quotes is a client responsible for handling quotes requests
	 * @type {QuotesClient}
	 */
	get quotes(): QuotesClient {
		return this._quotes;
	}


}
