import { getAllQuotesMock } from './quotes.mock.js';
import { QuotesClient } from './quotes.core.js';
import { LocalAxios } from "../../common/index.js";
import { AxiosInstance } from 'axios';

jest.setTimeout(5 * 1000)

const mockAxios = jest.fn();
const spy = jest.spyOn(LocalAxios, "instance");
spy.mockImplementation(() => {
	return { get: mockAxios} as unknown as AxiosInstance
});

describe('QuotesClient', () => {
	let client: QuotesClient;
	beforeAll(() => {
		client = new QuotesClient('9WBFzZtkrV1MyMMqBqbU')
	})

	describe('getAll', () => {

		beforeEach(() => {
			jest.clearAllMocks();
			mockAxios.mockResolvedValue({ data: getAllQuotesMock });
		})

		it('Should return a list of quotes', async () => {
			const response = await client.getAll();
			expect(mockAxios).toHaveBeenCalledTimes(1);
			expect(mockAxios).toHaveBeenCalledWith('quote');
			expect(response.docs).toHaveLength(3);
		});

		it('Should accept page option', async () => {
			await client.getAll({ page: 2 });
			expect(mockAxios).toHaveBeenCalledWith('quote?page=2&');
		});

		it('Should accept limit option', async () => {
			await client.getAll({ limit: 100 });
			expect(mockAxios).toHaveBeenCalledWith('quote?limit=100&');
		});

		it('Should accept offset option', async () => {
			await client.getAll({ offset: 3 });
			expect(mockAxios).toHaveBeenCalledWith('quote?offset=3&');
		});

		it('Should accept sort option', async () => {
			await client.getAll({ sort: { field: 'name'}});
			expect(mockAxios).toHaveBeenCalledWith('quote?sort=name:asc&');
		});

		it('Should short ascending by default', async () => {
			await client.getAll({ sort: { field: 'name'}});
			expect(mockAxios).toHaveBeenCalledWith('quote?sort=name:asc&');
		});

		it('Should accept descending sorting option', async () => {
			await client.getAll({ sort: { field: 'name', descending: true}});
			expect(mockAxios).toHaveBeenCalledWith('quote?sort=name:desc&');
		});

		it('Should accept filter option', async () => {
			await client.getAll({ filter: 'name=Gandalf'});
			expect(mockAxios).toHaveBeenCalledWith('quote?name=Gandalf&');
		});

		// eslint-disable-next-line jest/no-disabled-tests
		it.skip('Should only accept valid filters options', async () => {
			await expect(client.getAll({ filter: 'invalidquoteProp=Gandalf'})).rejects.toMatch('VALIDATION_ERROR');
			expect(mockAxios).toHaveBeenCalledTimes(0);
		});

		it('Should combine filters', async () => {
			await client.getAll({ page: 2, limit: 100, offset: 3, sort: { field: 'name', descending: true}});
			expect(mockAxios).toHaveBeenCalledWith('quote?limit=100&page=2&offset=3&sort=name:desc&');
		});
	})

	describe('getQuote', () => {

		beforeEach(() => {
			jest.clearAllMocks();
			mockAxios.mockResolvedValue({ data: getAllQuotesMock });
		});

		it('Should return a single quote', async () => {
			const id = '5cd95395de30eff6ebccde56';
			await client.getQuote(id);
			expect(mockAxios).toHaveBeenCalledTimes(1);
			expect(mockAxios).toHaveBeenCalledWith(`quote/${id}`);
		});
	})
});
