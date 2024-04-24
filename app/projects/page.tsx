"use client";

import { RxExternalLink } from 'react-icons/rx';

import Container from '@/components/container';
import { Button } from '@/components/ui/button';
import WorkPanel from '@/components/workpanel';
import WORK from '@/lib/work';

const ProjectsPage = () => {
	return (
		<Container>
			<div className="flex flex-col gap-8 items-start justify-start w-full">
				<h1 className="text-6xl font-extrabold">Projects</h1>
				<p>Curated catalogue of my recent work.</p>
				<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
					{WORK.map((work, i) => (
						<WorkPanel key={i} work={work} />
					))}
				</div>
				<div className="flex w-full items-center justify-center">
					<Button
						variant="ghost"
						onClick={() => {
							window.open("https://github.com/joonarafael", "_blank");
						}}
						className="items-center gap-2 gradient-text w-fit text-transparent animate-gradient text-2xl"
					>
						<p>Check my GitHub</p>
						<RxExternalLink className="w-5 h-5" />
					</Button>
				</div>
			</div>
		</Container>
	);
};

export default ProjectsPage;
