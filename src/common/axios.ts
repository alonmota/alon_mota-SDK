import axios, { AxiosInstance } from 'axios';
import { plainToClass } from 'class-transformer';
import { Responses } from '../interfaces/response.js';
const SECONDS = 1000;

export class LocalAxios {
	static instance<T> (token): AxiosInstance {
		return axios.create({
			baseURL: 'https://the-one-api.dev/v2/',
			timeout: 5 * SECONDS,
			headers: {
				'Authorization': `Bearer ${token}`,
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			transformResponse: (data) => {
				try {
					const response = plainToClass(Responses<T>, JSON.parse(data))
					return response;
				} catch (error) {
					return data;
				}
			},
		});
	}
}

export default LocalAxios;