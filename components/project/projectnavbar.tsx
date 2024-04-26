"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { Button } from "../ui/button";

interface ProjectNavbarProps {
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

const ProjectNavbar = ({ currentProject }: ProjectNavbarProps) => {
	const currentIndex = PROJECTS.findIndex(
		(project) => project.id === currentProject
	);
	const previousProject =
		PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
	const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

	return (
		<div className="z-50 pb-36 px-12 md:px-48 lg:px-96 group fixed bottom-0 left-0 flex w-full justify-center items-center">
			<div className="group-hover:shadow-lg group-hover:shadow-black/50 dark:group-hover:shadow-purple-500 dark:shadow-purple-800 shadow-black/25 bg-background border shadow-md min-w-[180px] w-full max-w-[720px] flex justify-between items-center rounded-xl p-2 transition group-hover:duration-200 duration-1000 flex-col sm:flex-row gap-2">
				<a className="w-full sm:w-fit" href={`/projects/${previousProject.id}`}>
					<Button
						className="items-center gap-2 w-full sm:w-fit"
						variant="secondary"
					>
						<FaArrowLeft />
						<p>{previousProject.title}</p>
					</Button>
				</a>
				<div className="hidden lg:flex font-light text-neutral-500">
					<em>Check the next project as well!</em>
				</div>
				<a className="w-full sm:w-fit" href={`/projects/${nextProject.id}`}>
					<Button className="items-center gap-2 w-full sm:w-fit">
						<p>{nextProject.title}</p>
						<FaArrowRight />
					</Button>
				</a>
			</div>
		</div>
	);
};

export default ProjectNavbar;
