"use client";

interface WorkPanelProps {
	title: string;
	description: string;
	image: string;
}

const WorkPanel = ({ title, description, image }: WorkPanelProps) => {
	return (
		<div className="group shadow-lg shadow-black/50 dark:shadow-purple-800 w-full h-96 flex flex-col rounded-xl group-hover:">
			<div className="flex h-1/2 bg-yellow-500 text-rose-500 rounded-t-xl items-center justify-center">
				MEDIA MISSING
			</div>
			<div className="flex flex-col text-left p-2 gap-2 bg-background h-1/2 rounded-b-xl">
				<h3 className="text-2xl font-bold">{title}</h3>
				<p className="text-neutral-500 font-light">{description}</p>
			</div>
		</div>
	);
};

export default WorkPanel;
