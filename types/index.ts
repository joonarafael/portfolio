export type Skill = {
	name: string;
	icon: string;
};

export type Experience = {
	title: {
		en: string;
		fi: string;
	};
	company: string;
	location: string;
	href?: string | null;
	from: string;
	to?: string | null;
	description: {
		en: string;
		fi: string;
	};
	skills: Skill[];
};

export type Project = {
	thumbnail?: string | null;
	media: string;
	mediaDescription: string;
	href?: string | null;
	deployedOn?: string | null;
	id: string;
	title: string;
	about: string;
	description: React.ReactNode;
	skills: Skill[];
	date: string;
};
