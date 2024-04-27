import { IoIosArrowDropleft } from 'react-icons/io';

import EmptyState from '@/components/emptystate';
import ProjectNavbar from '@/components/project/projectnavbar';
import { Button } from '@/components/ui/button';

import ProjectClient from './project';

interface IParams {
	project?: string;
}

const ProjectPage = async ({ params }: { params: IParams }) => {
	const { project } = params;
	const acceptable = [
		"blast-calc",
		"explotrack",
		"spotisaver",
		"tiirascraper",
		"visualpathfinder",
		"flaggame",
	];

	if (!project) {
		return (
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
		);
	}

	if (!acceptable.includes(project)) {
		return (
			<EmptyState>
				<div className="flex flex-col gap-12 items-center justify-center">
					<h1 className="text-4xl font-extrabold">Oopsie!</h1>
					<span className="flex flex-row gap-1 items-center font-lg">
						<p>{`I have not yet created a project named '`}</p>
						<pre className="bg-neutral-500 rounded-xl p-1 text-white">
							{project}
						</pre>
						<p>{`'!`}</p>
					</span>
					<a href="/projects">
						<Button className="w-min items-center gap-2">
							<IoIosArrowDropleft className="w-4 h-4" />
							<p>Back to projects</p>
						</Button>
					</a>
				</div>
			</EmptyState>
		);
	}

	return (
		<div>
			<ProjectClient id={project} />
			<ProjectNavbar currentProject={project} />
		</div>
	);
};

export default ProjectPage;