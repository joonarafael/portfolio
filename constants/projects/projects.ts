import DROPBOX_CONTENT from '@/constants/dropboxcontent';
import { Project } from '@/types';

import {
    BLASTCALC_DESCRIPTION_EN, BLASTCALC_DESCRIPTION_FI, EXPLOTRACK_DESCRIPTION_EN,
    EXPLOTRACK_DESCRIPTION_FI, FLAGGAME_DESCRIPTION_EN, FLAGGAME_DESCRIPTION_FI,
    SPOTISAVER_DESCRIPTION_EN, SPOTISAVER_DESCRIPTION_FI, TIIRASCRAPER_DESCRIPTION_EN,
    TIIRASCRAPER_DESCRIPTION_FI, VISUALPATHFINDER_DESCRIPTION_EN, VISUALPATHFINDER_DESCRIPTION_FI
} from './descriptions';

const PROJECTS: Project[] = [
	{
		media: DROPBOX_CONTENT.media_explotrack,
		mediaDescription: {
			en: "The web application was built to be responsive and accessible. The user interface is clean and easy to use on mobile devices as well. Fine-tuning of the user experience was done closely with the customer to ensure the best possible outcome.",
			fi: "Web-applikaatio rakennettiin responsiiviseksi ja helppokäyttöiseksi. Käyttöliittymä on moderni ja yksinkertainen, ja sitä on mukava käyttää myös mobiililaitteilla. Käyttökokemuksen hienosäätö tehtiin tiiviissä yhteistyössä asiakkaan kanssa parhaan mahdollisen lopputuloksen saavuttamiseksi.",
		},
		title: "Explotrack",
		date: "05/2024",
		thumbnail: DROPBOX_CONTENT.thumbnail_explotrack,
		id: "explotrack",
		about: {
			en: "Service to track and monitor explosives usage.",
			fi: "Kirjanpitojärjestelmä räjähteiden seurantaan ja jäljittämiseen.",
		},
		description: {
			en: EXPLOTRACK_DESCRIPTION_EN(),
			fi: EXPLOTRACK_DESCRIPTION_FI(),
		},
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
		mediaDescription: {
			en: "More analyzing tools are coming in the future, but already the user is provided with a lot of information. What comes to exporting, both a more simpler and concise version, as well as a highly detailed one, can be downloaded.",
			fi: "Lisää analysointityökaluja on vielä tulossa, mutta jo nyt käyttäjä saa paljon relevanttia tietoa soittolistoistaan. Mitä tulee soittolistojen vientiin, on listasta mahdollista ladata sekä tiivistetty että erittäin yksityiskohtainen versio.",
		},
		href: "https://spotisaver.vercel.app",
		thumbnail: DROPBOX_CONTENT.thumbnail_spotisaver,
		deployedOn: "Vercel",
		date: "04/2024",
		title: "Spotisaver",
		id: "spotisaver",
		about: {
			en: "Service to analyze and export Spotify playlists.",
			fi: "Palvelu Spotify-soittolistojen analysointiin ja vientiin.",
		},
		description: {
			en: SPOTISAVER_DESCRIPTION_EN(),
			fi: SPOTISAVER_DESCRIPTION_FI(),
		},
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
		mediaDescription: {
			en: "The smaller map is interactive and shows the pathfinding result. So-called 'virtual maps' are non-interactive, and won't display any results. However, they are vastly larger and therefore yield more interesting results.",
			fi: "Pienempi kartta on interaktiivinen ja siinä näkyy reitinhakutulokset. Niin sanotut 'virtuaalikartat' eivät ole interaktiivisia eivätkä näytä tuloksia, mutta ne ovat huomattavasti suurempia ja siksi tulosten kannalta ehkä mielenkiintoisempia.",
		},
		href: "https://visualpathfinder-production.up.railway.app/",
		thumbnail: DROPBOX_CONTENT.thumbnail_visualpathfinder,
		date: "03/2024",
		deployedOn: "Railway App",
		title: "Visual Pathfinder",
		id: "visualpathfinder",
		about: {
			en: "A visual pathfinding tool to compare three different pathfinding algorithms.",
			fi: "Visuaalinen reitinhakutyökalu, jolla voi vertailla kolmea eri reitinhakualgoritmia.",
		},
		description: {
			en: VISUALPATHFINDER_DESCRIPTION_EN(),
			fi: VISUALPATHFINDER_DESCRIPTION_FI(),
		},
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
		mediaDescription: {
			en: "The scraper is used through the command line. It's built as a server, so it can be left to run for as long as needed. Also note the utilization of the custom configuration files for filtering.",
			fi: "Scraper käynnistetään komentoriviltä. Se on rakennettu palvelimeksi, joten sen voi jättää pyörimään niin pitkäksi aikaa kuin tarvitaan. Räätälöityjä konfiguraatiotiedostoja käytetään havaintojen personoituun suodattamiseen.",
		},
		id: "tiirascraper",
		date: "04/2024",
		title: "Tiirascraper",
		about: {
			en: "Python web scraper to scrape, filter and process bird observations from Tiira.fi.",
			fi: "Web-scraper lintuhavaintojen keräämiseen, suodattamiseen ja käsittelyyn.",
		},
		description: {
			en: TIIRASCRAPER_DESCRIPTION_EN(),
			fi: TIIRASCRAPER_DESCRIPTION_FI(),
		},
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
		mediaDescription: {
			en: "The correct video has not yet been added.",
			fi: "Oikeaa videota ei ole vielä lisätty.",
		},
		href: "https://blastcalc.pages.dev/",
		thumbnail: DROPBOX_CONTENT.thumbnail_blastcalc,
		deployedOn: "Cloudflare Pages",
		date: "Under development",
		id: "blast-calc",
		title: "Blast Calc",
		about: {
			en: "Application to create blasting circuit diagrams and calculate detonation delays.",
			fi: "Sovellus räjähdysviiveiden laskemiseen ja kenttäkorttien luomiseen.",
		},
		description: {
			en: BLASTCALC_DESCRIPTION_EN(),
			fi: BLASTCALC_DESCRIPTION_FI(),
		},
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
		mediaDescription: {
			en: "User interface rendered with the Tkinter library. Note the various statistics calculated, game history, and the 5 different available game modes.",
			fi: "Käyttöliittymä renderöidään Tkinter-kirjastolla. Eritystä huomiota kannattaa kiinnittää erilaisiin laskettaviin tilastoihin, pelihistoriaan ja jopa 5 eri pelitilaan.",
		},
		id: "flaggame",
		date: "05/2023",
		title: "Flag Game",
		about: {
			en: "Game built with Python and the Tkinter library.",
			fi: "Peli rakennettu Pythonilla ja Tkinter-kirjastolla.",
		},
		description: {
			en: FLAGGAME_DESCRIPTION_EN(),
			fi: FLAGGAME_DESCRIPTION_FI(),
		},
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