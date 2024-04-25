"use client";

import { IoIosArrowDropleft } from "react-icons/io";
import { RxGithubLogo } from "react-icons/rx";
import { TbForbid2 } from "react-icons/tb";
import { VscGlobe } from "react-icons/vsc";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import WORK from "@/lib/work";

interface ProjectProps {
	id: string;
}

const ProjectClient = ({ id }: ProjectProps) => {
	const project = WORK.filter((work) => work.id === id)[0];

	const sortedSkills = project.skills;

	sortedSkills.sort((a, b) => {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	});

	return (
		<Container>
			<div className="flex flex-col gap-12 items-center w-full min-h-screen">
				<div className="flex gap-6 flex-col lg:flex-row w-full">
					<div className="flex flex-col gap-8 text-left w-full">
						<a href="/projects">
							<Button variant="outline" className="w-fit items-center gap-2">
								<IoIosArrowDropleft className="w-4 h-4" />
								<p>Back to projects</p>
							</Button>
						</a>
						<h1 className="text-4xl sm:text-6xl font-extrabold">
							{project.title}
						</h1>
						<p className="text-lg">{project.about}</p>
						<div className="flex flex-wrap gap-4 text-sm font-light">
							{sortedSkills.map((skill, i) => (
								<p key={i}>{skill.name}</p>
							))}
						</div>
					</div>
					<div className="border-t pt-8 lg:border-none lg:pt-0 flex flex-col gap-4 items-center lg:items-end text-center lg:text-right w-full lg:w-fit h-full justify-center lg:justify-end">
						{project?.href && (
							<Button
								onClick={() => {
									window.open(project.href ?? "", "_blank");
								}}
								className="items-center gap-2 text-md w-full"
							>
								<VscGlobe className="w-5 h-5" />
								<p>Check the live project on web</p>
							</Button>
						)}
						{project.id === "explotrack" ? (
							<Button
								disabled
								variant="outline"
								className="items-center gap-2 text-md w-full"
							>
								<TbForbid2 className="w-5 h-5" />
								<p>Source code is private</p>
							</Button>
						) : (
							<Button
								onClick={() => {
									window.open(
										`https://github.com/joonarafael/${project.id}`,
										"_blank"
									);
								}}
								variant="outline"
								className="items-center gap-2 text-md w-full"
							>
								<RxGithubLogo className="w-5 h-5" />
								<p>View source code on GitHub</p>
							</Button>
						)}
						<pre className="text-neutral-500 w-fit">{project.date}</pre>
					</div>
				</div>
				<div className="flex w-full items-start justify-start">
					<div className="w-full lg:max-w-[1080px] text-left">
						<p>{project.description}</p>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default ProjectClient;
