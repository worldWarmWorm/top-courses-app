export enum TopLevelCatigory {
	Courses,
	Services,
	Book,
	Products
}

export class TopPageModel {
	firstCategory: TopLevelCatigory;
	secondCategory: string;
	title: string;
	category: string;
	hh?: {
		count: number;
		juniorSalary: number;
		middleSalary: number;
		seniorSalary: number;
	};
	advantages: {
		title: string;
		discription: string;
	}[];
	seoText: string;
	tagsTitle: string;
	tags: string[];
}
