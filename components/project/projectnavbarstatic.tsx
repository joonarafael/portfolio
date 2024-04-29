"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoIosArrowDropleft } from "react-icons/io";

import { Button } from "../ui/button";

interface ProjectNavbarStaticProps {
	currentProject: string;
}

const PROJECTS = [
	{
		id: "explotrack",
		title: "Explotrack",
	},
	{
		id: "spotisaver",
		title: "Spotisaver",
	},
	{
		id: "visualpathfinder",
		title: "Visual Pathfinder",
	},
	{
		id: "tiirascraper",
		title: "Tiirascraper",
	},
	{
		id: "blast-calc",
		title: "Blast Calc",
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
		<div className="flex lg:hidden flex-col w-full gap-8 items-center justify-center border-t pt-12">
			<p className="font-light text-neutral-500 text-sm">
				<em>Check other projects as well!</em>
			</p>
			<div className="flex min-w-[180px] w-full justify-between items-center flex-col sm:flex-row gap-2">
				<a className="w-full" href={`/projects/${previousProject.id}`}>
					<Button className="items-center gap-2 w-full" variant="secondary">
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
			<div className="flex min-w-[180px] w-full justify-between items-center flex-col border-t pt-12">
				<a className="w-full" href={`/projects`}>
					<Button className="items-center gap-2 w-full" variant="outline">
						<IoIosArrowDropleft className="w-5 h-5" />
						<p>Back to projects</p>
					</Button>
				</a>
			</div>
		</div>
	);
};

export default ProjectNavbarStatic;
