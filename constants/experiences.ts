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
			en: "(Alongside my studies) Working on various systems integrations and contributing to building large-scale software infrastructure. Participating in client meetings and assisting in system design in general.",
			fi: "(Opintojen ohella) Erinäisten järjestelmäintegraatioiden toteutusta ja työtä monimutkaisten ohjelmistokokonaisuuksien kanssa. Silloin tällöin asiakastapaamisia ja osallistumista järjestelmäsuunnitteluun yleisesti.",
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
];

export default EXPERIENCES;
