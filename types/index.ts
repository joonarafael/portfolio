export type Skill = {
	name: string;
	icon: string;
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	href: string;
	from: string;
	to?: string | null;
	description: string;
	skills: Skill[];
};
