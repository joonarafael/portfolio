"use client";

import { IoIosArrowDropleft } from "react-icons/io";
import { RxGithubLogo } from "react-icons/rx";
import { TbForbid2 } from "react-icons/tb";

import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";
import { Project, Skill } from "@/types";

import { Button } from "../ui/button";

interface ProjectHeaderProps {
	project: Project;
	sortedSkills: Skill[];
}

const ProjectHeader = ({ project, sortedSkills }: ProjectHeaderProps) => {
	const { language } = useTranslationStore();

	return (
		<div className="flex gap-6 flex-col lg:flex-row w-full">
			<div className="flex flex-col gap-8 text-left w-full">
				<a href="/projects" className="w-fit">
					<Button variant="outline" className="w-fit items-center gap-2">
						<IoIosArrowDropleft className="w-5 h-5" />
						<p>
							{TRANSLATION[language].project.header.backToProjectsBtn.btnText}
						</p>
					</Button>
				</a>
				<h1 className="text-4xl sm:text-6xl font-extrabold">{project.title}</h1>
				<p className="text-lg">{project.about}</p>
				<div className="flex flex-wrap gap-4 text-sm font-light text-primary/50">
					{sortedSkills.map((skill, i) => (
						<p key={i}>{skill.name}</p>
					))}
				</div>
			</div>
			<div className="border-t pt-8 lg:border-none lg:pt-0 flex">
				{project.id === "explotrack" ? (
					<div className="flex flex-col w-full items-center lg:items-end gap-4">
						<Button
							disabled
							className="items-center gap-2 text-md w-full cursor-not-allowed"
						>
							<TbForbid2 className="w-5 h-5" />
							<p>
								{TRANSLATION[language].project.header.sourceCodeBtn.private}
							</p>
						</Button>
						<pre className="text-neutral-500 w-fit">{project.date}</pre>
					</div>
				) : (
					<div className="flex flex-col w-full items-center lg:items-end gap-4">
						<a
							className="w-full"
							href={`https://github.com/joonarafael/${project.id}`}
							target="_blank"
						>
							<Button className="items-center gap-2 text-md w-full">
								<RxGithubLogo className="w-5 h-5" />
								<p>
									{TRANSLATION[language].project.header.sourceCodeBtn.btnText}
								</p>
							</Button>
						</a>
						<pre className="text-neutral-500 w-fit">{project.date}</pre>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectHeader;
