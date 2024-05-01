"use client";

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { IoIosArrowDropleft } from 'react-icons/io';

import { useTranslationStore } from '@/hooks/useTranslation';
import TRANSLATION from '@/translations/translation';

import { Button } from '../ui/button';

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
	const { language } = useTranslationStore();

	const currentIndex = PROJECTS.findIndex(
		(project) => project.id === currentProject
	);
	const previousProject =
		PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
	const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

	return (
		<div className="flex flex-col w-full gap-8 items-center justify-center border-t pt-12">
			<p className="font-light text-neutral-500">
				<em>{TRANSLATION[language].project.navbar.title}</em>
			</p>
			<div className="flex min-w-[180px] w-full justify-between items-center flex-col sm:flex-row gap-2">
				<a className="w-full hidden xl:block" href={`/projects`}>
					<Button className="items-center gap-2 w-full" variant="outline">
						<IoIosArrowDropleft className="w-5 h-5" />
						<p>
							{TRANSLATION[language].project.header.backToProjectsBtn.btnText}
						</p>
					</Button>
				</a>
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
			<div className="flex xl:hidden min-w-[180px] w-full justify-between items-center flex-col border-t pt-12">
				<a className="w-full" href={`/projects`}>
					<Button className="items-center gap-2 w-full" variant="outline">
						<IoIosArrowDropleft className="w-5 h-5" />
						<p>
							{TRANSLATION[language].project.header.backToProjectsBtn.btnText}
						</p>
					</Button>
				</a>
			</div>
		</div>
	);
};

export default ProjectNavbar;
