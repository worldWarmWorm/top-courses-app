export class ProductModel {
	image: string;
	title: string;
	price: number;
	oldPrice: number;
	credit: number;
	calculatedRating: number;
	description: string;
	advantages: string;
	disAdvantages: string;
	categories: string[];
	tegs: string;
	characteristic: {
		[key: string]: string;
	};
}
