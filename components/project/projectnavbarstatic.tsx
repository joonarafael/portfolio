"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { Button } from "../ui/button";

interface ProjectNavbarStaticProps {
	currentProject: string;
}

const PROJECTS = [
	{
		id: "blast-calc",
		title: "Blast Calc",
	},
	{
		id: "explotrack",
		title: "Explotrack",
	},
	{
		id: "spotisaver",
		title: "Spotisaver",
	},
	{
		id: "tiirascraper",
		title: "Tiirascraper",
	},
	{
		id: "visualpathfinder",
		title: "Visual Pathfinder",
	},
	{
		id: "flaggame",
		title: "Flag Game",
	},
];

const ProjectNavbarStatic = ({ currentProject }: ProjectNavbarStaticProps) => {
	const currentIndex = PROJECTS.findIndex(
		(project) => project.id === currentProject
	);
	const previousProject =
		PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
	const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

	return (
		<div className="flex lg:hidden min-w-[180px] w-full justify-between items-center rounded-xl p-2 transition group-hover:duration-200 duration-1000 flex-col sm:flex-row gap-2">
			<a className="w-full" href={`/projects/${previousProject.id}`}>
				<Button className="items-center gap-2 w-full" variant="outline">
					<FaArrowLeft />
					<p>{previousProject.title}</p>
				</Button>
			</a>
			<a className="w-full" href={`/projects/${nextProject.id}`}>
				<Button className="items-center gap-2 w-full">
					<p>{nextProject.title}</p>
					<FaArrowRight />
				</Button>
			</a>
		</div>
	);
};

export default ProjectNavbarStatic;
