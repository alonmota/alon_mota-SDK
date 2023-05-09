import { Hello } from './main.js';

describe('greeter function', () => {
	it('delays the greeting by 2 seconds', () => {
		expect(Hello()).toEqual('hello');
	});
});
