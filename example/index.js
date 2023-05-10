import { LotrClient } from '@alonmota/alon_mota-sdk';


(async () => {
	const API_TOKEN = 'TOKEN_HERE'
	const client = new LotrClient(API_TOKEN);
	let response
	response = await client.movies.getAll();
	console.log(response);
	response = await client.movies.getAll({ page: 2, limit: 3, offset: 2, sort: { field: 'name', descending: true}, filter: 'academyAwardWins>0'});
	console.log(response);
	response = await client.movies.getMovie('5cd95395de30eff6ebccde5d');
	console.log(response);
	response = await client.movies.getMovieQuotes('5cd95395de30eff6ebccde5d', { page: 2, limit: 3, offset: 2, sort: { field: 'dialog', descending: true}, filter: 'movie=5cd95395de30eff6ebccde5d'});
	console.log(response);
	response = await client.quotes.getAll();
	console.log(response);
	response = await client.quotes.getAll({ page: 2, limit: 3, offset: 2, sort: { field: 'dialog', descending: false}, filter: 'movie=5cd95395de30eff6ebccde5d'});
	console.log(response);
	response = await client.quotes.getQuote('5cd96e05de30eff6ebcce7e9');
	console.log(response);
})()