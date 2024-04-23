import { Experience } from '@/types';

const EXPERIENCES: Experience[] = [
	{
		title: "Example 1",
		company: "Company Omega",
		from: "Apr 2021",
		to: null,
		location: "New York, New York",
		href: "https://www.google.com",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		skills: [
			{
				name: "AWS",
				icon: "",
			},
			{
				name: "Vue.js",
				icon: "",
			},
			{
				name: "Docker",
				icon: "",
			},
			{
				name: "Cloudflare",
				icon: "",
			},
			{
				name: "MariaDB",
				icon: "",
			},
		],
	},
	{
		title: "Example 0",
		company: "Company Alpha",
		from: "Mar 2020",
		to: "Feb 2021",
		location: "Paris, France",
		href: "https://www.facebook.com",
		description:
			"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		skills: [
			{
				name: "React",
				icon: "",
			},
			{
				name: "TypeScript",
				icon: "",
			},
			{
				name: "Redis",
				icon: "",
			},
		],
	},
];

export default EXPERIENCES;
