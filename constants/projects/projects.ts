import DROPBOX_CONTENT from "@/constants/dropboxcontent";
import { Project } from "@/types";

import {
	BLASTCALC_DESCRIPTION,
	EXPLOTRACK_DESCRIPTION,
	FLAGGAME_DESCRIPTION,
	SPOTISAVER_DESCRIPTION,
	TIIRASCRAPER_DESCRIPTION,
	VISUALPATHFINDER_DESCRIPTION,
} from "./descriptions";

const PROJECTS: Project[] = [
	{
		media: DROPBOX_CONTENT.media_todo,
		mediaDescription: "The correct video has not yet been added.",
		title: "Explotrack",
		deployedOn: "Vercel",
		href: "https://www.google.com",
		date: "Under development",
		thumbnail: DROPBOX_CONTENT.thumbnail_explotrack,
		id: "explotrack",
		about: "Completed fullstack project built with a real customer.",
		description: EXPLOTRACK_DESCRIPTION(),
		skills: [
			{
				name: "TypeScript",
				icon: "https://img.shields.io/badge/-TypeScript-informational?style=for-the-badge&color=black&logo=typescript",
			},
			{
				name: "Radix UI",
				icon: "https://img.shields.io/badge/Radix%20UI-informational?style=for-the-badge&color=black&logo=radix-ui&logoColor=red",
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
			{
				name: "ChatGPT",
				icon: "https://img.shields.io/badge/ChatGPT-informational?style=for-the-badge&color=black&logo=openai&logoColor=green",
			},
			{
				name: "Dependabot",
				icon: "https://img.shields.io/badge/Dependabot-informational?style=for-the-badge&color=black&logo=dependabot&logoColor=blue",
			},
			{
				name: "Redis",
				icon: "https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&color=black&logo=redis",
			},
		],
	},
	{
		media: DROPBOX_CONTENT.media_spotisaver,
		mediaDescription:
			"More analyzing tools are coming in the future, but already the user is provided with a lot of information. What comes to exporting, both a more simpler and concise version, as well as a highly detailed one, can be downloaded.",
		href: "https://spotisaver.vercel.app",
		thumbnail: DROPBOX_CONTENT.thumbnail_spotisaver,
		deployedOn: "Vercel",
		date: "04/2024",
		title: "Spotisaver",
		id: "spotisaver",
		about: "Service to analyze and export Spotify playlists.",
		description: SPOTISAVER_DESCRIPTION(),
		skills: [
			{
				name: "TypeScript",
				icon: "https://img.shields.io/badge/-TypeScript-informational?style=for-the-badge&color=black&logo=typescript",
			},
			{
				name: "Radix UI",
				icon: "https://img.shields.io/badge/Radix%20UI-informational?style=for-the-badge&color=black&logo=radix-ui&logoColor=red",
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
				name: "ChatGPT",
				icon: "https://img.shields.io/badge/ChatGPT-informational?style=for-the-badge&color=black&logo=openai&logoColor=green",
			},
			{
				name: "Dependabot",
				icon: "https://img.shields.io/badge/Dependabot-informational?style=for-the-badge&color=black&logo=dependabot&logoColor=blue",
			},
			{
				name: "Redis",
				icon: "https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&color=black&logo=redis",
			},
		],
	},
	{
		media: DROPBOX_CONTENT.media_visualpathfinder,
		mediaDescription:
			"The smaller map is interactive and shows the pathfinding result. So-called 'virtual maps' are non-interactive, and won't display any results. However, they are vastly larger and therefore yield more interesting results.",
		href: "https://visualpathfinder-production.up.railway.app/",
		thumbnail: DROPBOX_CONTENT.thumbnail_visualpathfinder,
		date: "03/2024",
		deployedOn: "Railway App",
		title: "Visual Pathfinder",
		id: "visualpathfinder",
		about:
			"A visual pathfinding tool to compare three different pathfinding algorithms.",
		description: VISUALPATHFINDER_DESCRIPTION(),
		skills: [
			{
				name: "TypeScript",
				icon: "https://img.shields.io/badge/-TypeScript-informational?style=for-the-badge&color=black&logo=typescript",
			},
			{
				name: "Radix UI",
				icon: "https://img.shields.io/badge/Radix%20UI-informational?style=for-the-badge&color=black&logo=radix-ui&logoColor=red",
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
				name: "Jest",
				icon: "https://img.shields.io/badge/-Jest-informational?style=for-the-badge&color=black&logo=jest&logoColor=red",
			},
			{
				name: "ChatGPT",
				icon: "https://img.shields.io/badge/ChatGPT-informational?style=for-the-badge&color=black&logo=openai&logoColor=green",
			},
			{
				name: "Dependabot",
				icon: "https://img.shields.io/badge/Dependabot-informational?style=for-the-badge&color=black&logo=dependabot&logoColor=blue",
			},
		],
	},
	{
		media: DROPBOX_CONTENT.media_tiirascraper,
		mediaDescription:
			"The scraper is used through the command line. It's built as a server, so it can be left to run for as long as needed. Also note the utilization of the custom configuration files for filtering.",
		id: "tiirascraper",
		date: "04/2024",
		title: "Tiirascraper",
		about:
			"Python web scraper to scrape, filter and process bird observations from Tiira.fi.",
		description: TIIRASCRAPER_DESCRIPTION(),
		skills: [
			{
				name: "GitHub Actions",
				icon: "https://img.shields.io/badge/GitHub%20Actions-%232671E5.svg?style=for-the-badge&color=black&logo=githubactions",
			},
			{
				name: "Python",
				icon: "https://img.shields.io/badge/-Python-informational?style=for-the-badge&color=black&logo=python",
			},
			{
				name: "ChatGPT",
				icon: "https://img.shields.io/badge/ChatGPT-informational?style=for-the-badge&color=black&logo=openai&logoColor=green",
			},
		],
	},
	{
		media: DROPBOX_CONTENT.media_todo,
		mediaDescription: "The correct video has not yet been added.",
		href: "https://blastcalc.pages.dev/",
		thumbnail: DROPBOX_CONTENT.thumbnail_blastcalc,
		deployedOn: "Cloudflare Pages",
		date: "Under development",
		id: "blast-calc",
		title: "Blast Calc",
		about:
			"Application to create blasting circuit diagrams and calculate detonation delays.",
		description: BLASTCALC_DESCRIPTION(),
		skills: [
			{
				name: "GitHub Actions",
				icon: "https://img.shields.io/badge/GitHub%20Actions-%232671E5.svg?style=for-the-badge&color=black&logo=githubactions",
			},
			{
				name: "TypeScript",
				icon: "https://img.shields.io/badge/-TypeScript-informational?style=for-the-badge&color=black&logo=typescript",
			},
			{
				name: "Radix UI",
				icon: "https://img.shields.io/badge/Radix%20UI-informational?style=for-the-badge&color=black&logo=radix-ui&logoColor=red",
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
				name: "Jest",
				icon: "https://img.shields.io/badge/-Jest-informational?style=for-the-badge&color=black&logo=jest&logoColor=red",
			},
			{
				name: "ChatGPT",
				icon: "https://img.shields.io/badge/ChatGPT-informational?style=for-the-badge&color=black&logo=openai&logoColor=green",
			},
			{
				name: "Dependabot",
				icon: "https://img.shields.io/badge/Dependabot-informational?style=for-the-badge&color=black&logo=dependabot&logoColor=blue",
			},
			{
				name: "Cloudflare",
				icon: "https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&color=black&logo=Cloudflare",
			},
		],
	},
	{
		media: DROPBOX_CONTENT.media_flaggame,
		mediaDescription:
			"User interface rendered with the Tkinter library. Note the various statistics calculated, game history, and the 5 different available game modes.",
		id: "flaggame",
		date: "05/2023",
		title: "Flag Game",
		about: "Game built with Python and the Tkinter library.",
		description: FLAGGAME_DESCRIPTION(),
		skills: [
			{
				name: "GitHub Actions",
				icon: "https://img.shields.io/badge/GitHub%20Actions-%232671E5.svg?style=for-the-badge&color=black&logo=githubactions",
			},
			{
				name: "Poetry",
				icon: "https://img.shields.io/badge/Poetry-%233B82F6.svg?style=for-the-badge&color=black&logo=poetry",
			},
			{
				name: "Python",
				icon: "https://img.shields.io/badge/-Python-informational?style=for-the-badge&color=black&logo=python",
			},
			{
				name: "ChatGPT",
				icon: "https://img.shields.io/badge/ChatGPT-informational?style=for-the-badge&color=black&logo=openai&logoColor=green",
			},
		],
	},
];

export default PROJECTS;
