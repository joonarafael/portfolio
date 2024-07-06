"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoIosArrowDropleft } from "react-icons/io";

import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";

import { Button } from "../ui/button";

interface ProjectNavbarProps {
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

const ProjectNavbar = ({ currentProject }: ProjectNavbarProps) => {
	const router = useRouter();
	const { language } = useTranslationStore();

	const currentIndex = PROJECTS.findIndex(
		(project) => project.id === currentProject
	);
	const previousProject =
		PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
	const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

	return (
		<div className="flex flex-col w-full gap-8 items-center justify-center border-t pt-12">
			<p className="font-light text-muted-foreground">
				<em>{TRANSLATION[language].project.navbar.title}</em>
			</p>
			<div className="flex min-w-[180px] w-full justify-between items-center flex-col sm:flex-row gap-2">
				<Button
					onClick={() => {
						router.push("/projects");
					}}
					className="hidden xl:flex items-center gap-2 w-full"
					variant="outline"
				>
					<IoIosArrowDropleft className="w-5 h-5" />
					<p>
						{TRANSLATION[language].project.header.backToProjectsBtn.btnText}
					</p>
				</Button>
				<Button
					onClick={() => {
						router.push(`/projects/${previousProject.id}`);
					}}
					className="flex items-center gap-2 w-full"
					variant="secondary"
				>
					<FaArrowLeft />
					<p>{previousProject.title}</p>
				</Button>
				<Button
					onClick={() => {
						router.push(`/projects/${nextProject.id}`);
					}}
					className="items-center gap-2 w-full"
				>
					<p>{nextProject.title}</p>
					<FaArrowRight />
				</Button>
			</div>
			<div className="flex xl:hidden min-w-[180px] w-full justify-between items-center flex-col border-t pt-12">
				<Button
					onClick={() => {
						router.push("/projects");
					}}
					className="w-full gap-2 items-center"
					variant="outline"
				>
					<IoIosArrowDropleft className="w-5 h-5" />
					<p>
						{TRANSLATION[language].project.header.backToProjectsBtn.btnText}
					</p>
				</Button>
			</div>
		</div>
	);
};

export default ProjectNavbar;
