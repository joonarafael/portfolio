import { Experience } from "@/types";

const EXPERIENCES: Experience[] = [
	{
		title: {
			en: "Software Developer",
			fi: "Ohjelmistokehittäjä",
		},
		company: "Aufwin Defence Systems Oy",
		from: "07/2024",
		href: "https://aufwindefence.fi",
		to: null,
		location: "Helsinki, Finland",
		description: {
			en: "(Alongside studies) Doing software development work for Aufwin Defence Systems Oy. Mainly working on various systems integrations with Python.",
			fi: "(Opintojen ohella) Ohjelmistokehitystyötä Aufwin Defence Systems Oy:lle. Pääasiassa erilaisten järjestelmäintegraatioiden toteutusta Pythonilla.",
		},
		skills: [
			{
				name: "AWS",
				icon: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&color=black&logo=amazon-aws&logoColor=white",
			},
			{
				name: "Python",
				icon: "https://img.shields.io/badge/-Python-informational?style=for-the-badge&color=black&logo=python",
			},
			{
				name: "Docker",
				icon: "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&color=black",
			},
		],
	},
	{
		title: {
			en: "Software Developer",
			fi: "Ohjelmistokehittäjä",
		},
		company: "Freelancer",
		from: "01/2024",
		href: "https://joonakettunen.netlify.app",
		to: "07/2024",
		location: "Helsinki, Finland",
		description: {
			en: "(Alongside studies) Building websites and web applications for real clients using modern web development technologies.",
			fi: "(Opintojen ohella) Verkkosivujen ja web-sovellusten rakentamista oikeille asiakkaille käyttäen moderneja web-kehitysteknologioita.",
		},
		skills: [
			{
				name: "TypeScript",
				icon: "https://img.shields.io/badge/-TypeScript-informational?style=for-the-badge&color=black&logo=typescript",
			},
			{
				name: "Tailwind CSS",
				icon: "https://img.shields.io/badge/-TailwindCSS-informational?style=for-the-badge&color=black&logo=tailwindcss",
			},
			{
				name: "React",
				icon: "https://img.shields.io/badge/-React-informational?style=for-the-badge&color=black&logo=react",
			},
			{
				name: "Next.js",
				icon: "https://img.shields.io/badge/Next-informational?style=for-the-badge&color=black&logo=next.js&logoColor=white",
			},
			{
				name: "Vercel",
				icon: "https://img.shields.io/badge/Vercel-%23000000.svg?style=for-the-badge&color=black&logo=vercel&logoColor=white",
			},
			{
				name: "Postgres",
				icon: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&color=black&logo=postgresql&logoColor=white",
			},
		],
	},
];

export default EXPERIENCES;
