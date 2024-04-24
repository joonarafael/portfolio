"use client";

import { Work } from '@/types';

interface WorkPanelProps {
	work: Work;
}

const WorkPanel = ({ work }: WorkPanelProps) => {
	return (
		<a href={`/projects/${work.id}`}>
			<div className="group hover:cursor-pointer transition hover:duration-100 duration-300 hover:scale-105 shadow-lg shadow-black/50 dark:shadow-purple-800 w-full h-96 flex flex-col rounded-xl">
				<div className="flex h-2/3 sm:h-1/2 bg-primary text-rose-500 rounded-t-xl items-center justify-center">
					MEDIA MISSING
				</div>
				<div className="flex flex-col text-left p-4 gap-2 bg-background h-1/3 sm:h-1/2 rounded-b-xl">
					<h3 className="text-2xl font-bold group-hover:underline">
						{work.title}
					</h3>
					<p className="text-neutral-500 font-light hidden sm:flex">
						{work.about}
					</p>
				</div>
			</div>
		</a>
	);
};

export default WorkPanel;
