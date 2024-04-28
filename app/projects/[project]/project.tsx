/* eslint-disable @next/next/no-img-element */
"use client";

import Container from "@/components/container";
import DemoLink from "@/components/project/demolink";
import ProjectHeader from "@/components/project/header";
import ProjectLearnMore from "@/components/project/learnmore";
import ProjectNavbarStatic from "@/components/project/projectnavbarstatic";
import ProjectVideo from "@/components/project/video";
import PROJECTS from "@/constants/projects/projects";

interface ProjectProps {
	id: string;
}

const ProjectClient = ({ id }: ProjectProps) => {
	const project = PROJECTS.filter((project) => project.id === id)[0];

	const sortedSkills = project.skills;

	sortedSkills.sort((a, b) => {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	});

	return (
		<Container>
			<div className="flex flex-col gap-20 items-center w-full">
				<ProjectHeader project={project} sortedSkills={sortedSkills} />
				<div className="flex w-full flex-col xl:flex-row gap-8">
					<ProjectVideo project={project} />
					{project?.href && <DemoLink project={project} />}
				</div>
				<div className="flex flex-col text-left w-full gap-4">
					<h2 className="font-bold text-2xl">Description</h2>
					<span>{project.description}</span>
				</div>
				<ProjectLearnMore project={project} />
				<ProjectNavbarStatic currentProject={project.id} />
			</div>
		</Container>
	);
};

export default ProjectClient;
