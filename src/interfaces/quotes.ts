/**
 * Quotes
 * @typedef {Object} Quotes
 * @property {string} _id - The Quote ObjectId as a string
 * @property {string} dialog - The dialog text
 * @property {string} movie - The Movie _id
 * @property {string} character - The Character _id
 * @property {string} id - The id
 */
export class Quotes {
	_id: string;
	dialog: string;
	movie: string;
	character: string;
	id: string;
}