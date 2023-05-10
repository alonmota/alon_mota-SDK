import { plainToClass } from "class-transformer";
import { Responses, Quotes } from "../../interfaces/index.js";

export const getAllQuotesMock = plainToClass(Responses<Quotes>, {
	"docs": [
		{
			"_id": "5cd96e05de30eff6ebcce7e9",
			"dialog": "Deagol! MOCK",
			"movie": "5cd95395de30eff6ebccde5d",
			"character": "5cd99d4bde30eff6ebccfe9e",
			"id": "5cd96e05de30eff6ebcce7e9"
		},
		{
			"_id": "5cd96e05de30eff6ebcce7ea",
			"dialog": "Deagol!  MOCK",
			"movie": "5cd95395de30eff6ebccde5d",
			"character": "5cd99d4bde30eff6ebccfe9e",
			"id": "5cd96e05de30eff6ebcce7ea"
		},
		{
			"_id": "5cd96e05de30eff6ebcce7eb",
			"dialog": "Deagol!  MOCK",
			"movie": "5cd95395de30eff6ebccde5d",
			"character": "5cd99d4bde30eff6ebccfe9e",
			"id": "5cd96e05de30eff6ebcce7eb"
		}
	],
	"total": 2384,
	"limit": 3,
	"offset": 0,
	"page": 1,
	"pages": 795
})