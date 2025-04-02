import { Experience } from "@/types";

const EXPERIENCES: Experience[] = [
	{
		title: {
			en: "Frontend Developer Trainee",
			fi: "Frontend-kehittäjä, harjoittelija",
		},
		company: "Alma Media",
		from: "04/2025",
		href: "https://www.almamedia.fi",
		to: null,
		location: "Helsinki, Finland",
		description: {
			en: "",
			fi: "",
		},
		skills: [],
	},
	{
		title: {
			en: "Freelance Developer",
			fi: "Freelance ohjelmistokehittäjä",
		},
		company: "Aufwin Defence Systems Oy",
		from: "07/2024",
		href: "https://aufwindefence.fi",
		to: "04/2025",
		location: "Helsinki, Finland",
		description: {
			en: "(Alongside my studies) Working on various IoT systems integrations and contributing to building large-scale software infrastructure. Responsibilities include interfacing with partner firms, consulting with clients, and participating in system design.",
			fi: "(Opintojen ohella) Erinäisten IoT-järjestelmäintegraatioiden toteutusta ja työtä monimutkaisten ohjelmistokokonaisuuksien kanssa. Työnkuvaan kuuluu myös yhteydenpito partnerifirmojen kanssa ja kosultointi asiakastapaamisten välityksellä. Olen myös osallistunut järjestelmäsuunnitteluun yleisesti.",
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
			en: "Entrepreneur",
			fi: "Yrittäjä",
		},
		company: "Tmi Joona Kettunen",
		from: "07/2024",
		href: "https://joonakettunen.netlify.app",
		to: "04/2025",
		location: "Helsinki, Finland",
		description: {
			en: "Operating a registered business under my own trade name as a freelance developer. Responsible for managing all aspects of the business, including taxes, billing, and accounting, while delivering high-quality development services to clients.",
			fi: "Korkealaatuisten ohjelmistojen ja ohjelmointipalveluiden tarjontaa oman toiminimen kautta freelance-kehittäjänä. Vastuussa kaikista yrityksen osa-alueista, kuten verotuksesta, laskutuksesta ja kirjanpidosta.",
		},
		skills: [],
	},
];

export default EXPERIENCES;
