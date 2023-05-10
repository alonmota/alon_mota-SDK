import { plainToClass } from "class-transformer";
import { Responses, Movies } from "../../interfaces/index.js";

export const getAllMoviesMock = plainToClass(Responses<Movies>, {
	"docs": [
		{
			"_id": "5cd95395de30eff6ebccde56",
			"name": "The Lord of the Rings Series MOCK",
			"runtimeInMinutes": 558,
			"budgetInMillions": 281,
			"boxOfficeRevenueInMillions": 2917,
			"academyAwardNominations": 30,
			"academyAwardWins": 17,
			"rottenTomatoesScore": 94
		},
		{
			"_id": "5cd95395de30eff6ebccde57",
			"name": "The Hobbit Series MOCK",
			"runtimeInMinutes": 462,
			"budgetInMillions": 675,
			"boxOfficeRevenueInMillions": 2932,
			"academyAwardNominations": 7,
			"academyAwardWins": 1,
			"rottenTomatoesScore": 66.33333333
		},
		{
			"_id": "5cd95395de30eff6ebccde58",
			"name": "The Unexpected Journey MOCK",
			"runtimeInMinutes": 169,
			"budgetInMillions": 200,
			"boxOfficeRevenueInMillions": 1021,
			"academyAwardNominations": 3,
			"academyAwardWins": 1,
			"rottenTomatoesScore": 64
		},
	],
	"total": 3,
	"limit": 1000,
	"offset": 0,
	"page": 1,
	"pages": 1
})