import { IoIosArrowDropleft } from "react-icons/io";

import ClientOnly from "@/components/clientonly";
import EmptyState from "@/components/emptystate";
import { Button } from "@/components/ui/button";
import ACCEPTABLE_PROJECT_IDS from "@/constants/projects/acceptable";

import ProjectClient from "./project";

interface IParams {
	project?: string;
}

const ProjectPage = async ({ params }: { params: IParams }) => {
	const { project } = params;

	if (!project) {
		return (
			<ClientOnly>
				<EmptyState>
					<div className="flex flex-col gap-12 items-center justify-center">
						<h1 className="text-4xl font-extrabold">{`Something's missing!`}</h1>
						<p>{`No project was specified in the URL.`}</p>
						<a href="/projects">
							<Button className="w-min items-center gap-2">
								<IoIosArrowDropleft className="w-4 h-4" />
								<p>Back to projects</p>
							</Button>
						</a>
					</div>
				</EmptyState>
			</ClientOnly>
		);
	}

	if (!ACCEPTABLE_PROJECT_IDS.includes(project)) {
		return (
			<ClientOnly>
				<EmptyState>
					<div className="flex flex-col gap-12 items-center justify-center">
						<h1 className="text-4xl font-extrabold">Oopsie!</h1>
						<span className="flex flex-row gap-1 items-center font-lg">
							<p>{`I have not yet created a project named '`}</p>
							<pre>{project}</pre>
							<p>{`'!`}</p>
						</span>
						<a href="/projects">
							<Button className="w-min items-center gap-2">
								<IoIosArrowDropleft className="w-5 h-5" />
								<p>Back to projects</p>
							</Button>
						</a>
					</div>
				</EmptyState>
			</ClientOnly>
		);
	}

	return (
		<ClientOnly>
			<div className="flex flex-col min-h-screen">
				<ProjectClient id={project} />
			</div>
		</ClientOnly>
	);
};

export default ProjectPage;
