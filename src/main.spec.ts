import { LotrClient } from './main.js';
import { MoviesClient } from './resources/movies/movies.core.js';
import { QuotesClient } from './resources/quotes/quotes.core.js';

describe('QuotesClient', () => {
	let client: LotrClient;
	beforeAll(() => {
		client = new LotrClient('9WBFzZtkrV1MyMMqBqbU')
	})

	it('Should have a movie client', async () => {
		expect(client).toHaveProperty('movies');
		expect(client.movies).toBeInstanceOf(MoviesClient);
	});

	it('Should have a quote client', async () => {
		expect(client).toHaveProperty('quotes');
		expect(client.quotes).toBeInstanceOf(QuotesClient);
	});
});
