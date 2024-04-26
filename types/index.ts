export type Skill = {
	name: string;
	icon: string;
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	href?: string | null;
	from: string;
	to?: string | null;
	description: string;
	skills: Skill[];
};

export type Work = {
	image: string;
	href?: string | null;
	deployedOn?: string | null;
	id: string;
	title: string;
	about: string;
	description: string;
	skills: Skill[];
	date: string;
};
