"use client";

import { RxExternalLink } from "react-icons/rx";

import Container from "@/components/container";
import ProjectPanel from "@/components/projectpanel";
import { Button } from "@/components/ui/button";
import PROJECTS from "@/constants/projects/projects";

const ProjectsPage = () => {
	return (
		<Container>
			<div className="flex flex-col gap-12 items-start justify-start w-full min-h-screen">
				<h1 className="text-4xl sm:text-6xl font-extrabold">Projects</h1>
				<p>Curated catalogue of my recent work.</p>
				<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
					{PROJECTS.map((project, i) => (
						<ProjectPanel key={i} project={project} />
					))}
				</div>
				<div className="flex gap-8 w-full flex-col items-center justify-center pt-8">
					<p className="text-foreground/75 font-light">
						<em>
							Find even more projects and the source code for this portfolio
							website on my GitHub!
						</em>
					</p>
					<a href="https://github.com/joonarafael" target="_blank">
						<Button
							variant="outline"
							className="items-center gap-2 w-fit text-2xl p-6 font-bold"
						>
							<p>Check my GitHub</p>
							<RxExternalLink className="w-5 h-5" />
						</Button>
					</a>
				</div>
			</div>
		</Container>
	);
};

export default ProjectsPage;
