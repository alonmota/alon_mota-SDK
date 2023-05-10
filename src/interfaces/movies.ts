/**
 * Movies
 * @typedef {Object} Movies
 * @property {string} _id - The Movie ObjectId as a string
 * @property {string} name - The Movie name
 * @property {number} runtimeInMinutes - The tun time
 * @property {number} budgetInMillions - The budget
 * @property {number} boxOfficeRevenueInMillions - The box office revenue
 * @property {number} academyAwardNominations - Number of academy award nominations
 * @property {number} academyAwardWins - Number of academy award wins
 * @property {number} rottenTomatoesScore - The rotten tomatoes score
 */
export class Movies {
	_id: string;
	name: string;
	runtimeInMinutes: number;
	budgetInMillions: number;
	boxOfficeRevenueInMillions: number;
	academyAwardNominations: number;
	academyAwardWins: number;
	rottenTomatoesScore: number;
}