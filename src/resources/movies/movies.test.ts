import { getAllMoviesMock } from './movies.mock.js';
import { MoviesClient } from './movies.core.js';
import { LocalAxios } from "../../common/index.js";
import { AxiosInstance } from 'axios';

jest.setTimeout(5 * 1000)

const mockAxios = jest.fn();
const spy = jest.spyOn(LocalAxios, "instance");
spy.mockImplementation(() => {
	return { get: mockAxios} as unknown as AxiosInstance
});

describe('MoviesClient', () => {
	let client: MoviesClient;
	beforeAll(() => {
		client = new MoviesClient('9WBFzZtkrV1MyMMqBqbU')
	})

	describe('getAll', () => {

		beforeEach(() => {
			jest.clearAllMocks();
			mockAxios.mockResolvedValue({ data: getAllMoviesMock });
		})

		it('Should return a list of movies', async () => {
			const response = await client.getAll();
			expect(mockAxios).toHaveBeenCalledTimes(1);
			expect(mockAxios).toHaveBeenCalledWith('movie');
			expect(response.docs).toHaveLength(3);
		});

		it('Should accept page option', async () => {
			await client.getAll({ page: 2 });
			expect(mockAxios).toHaveBeenCalledWith('movie?page=2&');
		});

		it('Should accept limit option', async () => {
			await client.getAll({ limit: 100 });
			expect(mockAxios).toHaveBeenCalledWith('movie?limit=100&');
		});

		it('Should accept offset option', async () => {
			await client.getAll({ offset: 3 });
			expect(mockAxios).toHaveBeenCalledWith('movie?offset=3&');
		});

		it('Should accept sort option', async () => {
			await client.getAll({ sort: { field: 'name'}});
			expect(mockAxios).toHaveBeenCalledWith('movie?sort=name:asc&');
		});

		it('Should short ascending by default', async () => {
			await client.getAll({ sort: { field: 'name'}});
			expect(mockAxios).toHaveBeenCalledWith('movie?sort=name:asc&');
		});

		it('Should accept descending sorting option', async () => {
			await client.getAll({ sort: { field: 'name', descending: true}});
			expect(mockAxios).toHaveBeenCalledWith('movie?sort=name:desc&');
		});

		it('Should accept filter option', async () => {
			await client.getAll({ filter: 'name=Gandalf'});
			expect(mockAxios).toHaveBeenCalledWith('movie?name=Gandalf&');
		});

		// eslint-disable-next-line jest/no-disabled-tests
		it.skip('Should only accept valid filters options', async () => {
			await expect(client.getAll({ filter: 'invalidMovieProp=Gandalf'})).rejects.toMatch('VALIDATION_ERROR');
			expect(mockAxios).toHaveBeenCalledTimes(0);
		});

		it('Should combine filters', async () => {
			await client.getAll({ page: 2, limit: 100, offset: 3, sort: { field: 'name', descending: true}});
			expect(mockAxios).toHaveBeenCalledWith('movie?limit=100&page=2&offset=3&sort=name:desc&');
		});
	})

	describe('getMovie', () => {

		beforeEach(() => {
			jest.clearAllMocks();
			mockAxios.mockResolvedValue({ data: getAllMoviesMock });
		});

		it('Should return a single movie', async () => {
			const id = '5cd95395de30eff6ebccde56';
			await client.getMovie(id);
			expect(mockAxios).toHaveBeenCalledTimes(1);
			expect(mockAxios).toHaveBeenCalledWith(`movie/${id}`);
		});
	})

	describe('getMovieQuotes', () => {
		beforeEach(() => {
			jest.clearAllMocks();
			mockAxios.mockResolvedValue({ data: getAllMoviesMock });
		})

		it('Should return a list of quotes', async () => {
			const id = '5cd95395de30eff6ebccde56';
			await client.getMovieQuotes(id);
			expect(mockAxios).toHaveBeenCalledTimes(1);
			expect(mockAxios).toHaveBeenCalledWith(`movie/${id}/quote`);
		});

		it('Should accept page option', async () => {
			const id = '5cd95395de30eff6ebccde56';
			await client.getMovieQuotes(id, { page: 2 });
			expect(mockAxios).toHaveBeenCalledTimes(1);
			expect(mockAxios).toHaveBeenCalledWith(`movie/${id}/quote?page=2&`);
		});

		it('Should accept limit option', async () => {
			const id = '5cd95395de30eff6ebccde56';
			await client.getMovieQuotes(id, { limit: 100 });
			expect(mockAxios).toHaveBeenCalledWith(`movie/${id}/quote?limit=100&`);
		});

		it('Should accept offset option', async () => {
			const id = '5cd95395de30eff6ebccde56';
			await client.getMovieQuotes(id, { offset: 3 });
			expect(mockAxios).toHaveBeenCalledWith(`movie/${id}/quote?offset=3&`);
		});

		it('Should accept sort option', async () => {
			const id = '5cd95395de30eff6ebccde56';
			await client.getMovieQuotes(id, { sort: { field: 'name'}});
			expect(mockAxios).toHaveBeenCalledWith(`movie/${id}/quote?sort=name:asc&`);
		});

		it('Should short ascending by default', async () => {
			const id = '5cd95395de30eff6ebccde56';
			await client.getMovieQuotes(id, { sort: { field: 'name'}});
			expect(mockAxios).toHaveBeenCalledWith(`movie/${id}/quote?sort=name:asc&`);
		});

		it('Should accept descending sorting option', async () => {
			const id = '5cd95395de30eff6ebccde56';
			await client.getMovieQuotes(id, { sort: { field: 'name', descending: true}});
			expect(mockAxios).toHaveBeenCalledWith(`movie/${id}/quote?sort=name:desc&`);
		});

		it('Should accept filter option', async () => {
			const id = '5cd95395de30eff6ebccde56';
			await client.getMovieQuotes(id, { filter: 'movie=TheMovie'});
			expect(mockAxios).toHaveBeenCalledWith(`movie/${id}/quote?movie=TheMovie&`);
		});

		// eslint-disable-next-line jest/no-disabled-tests
		it.skip('Should only accept valid filters options', async () => {
			await expect(client.getAll({ filter: 'invalidQuoteProp=12345'})).rejects.toMatch('VALIDATION_ERROR');
			expect(mockAxios).toHaveBeenCalledTimes(0);
		});

		it('Should combine filters', async () => {
			const id = '5cd95395de30eff6ebccde56';
			await client.getMovieQuotes(id, { page: 2, limit: 100, offset: 3, sort: { field: 'name', descending: true}});
			expect(mockAxios).toHaveBeenCalledWith(`movie/${id}/quote?limit=100&page=2&offset=3&sort=name:desc&`);
		});
	})
});
