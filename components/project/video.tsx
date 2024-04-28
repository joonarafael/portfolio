"use client";

import { Project } from "@/types";

interface ProjectVideoProps {
	project: Project;
}

const ProjectVideo = ({ project }: ProjectVideoProps) => {
	return (
		<div className="flex flex-col gap-2">
			<div className="relative flex bg-primary text-rose-500 w-full text-center items-center justify-center rounded-xl">
				<div className="absolute z-0">LOADING VIDEO...</div>
				<video
					autoPlay
					loop
					muted
					controls
					className="relative z-30 w-full h-full object-cover rounded-xl"
					src={project.media}
				/>
			</div>
			<p className="hidden sm:block text-foreground/50 font-light text-sm text-left">
				{project.mediaDescription}
			</p>
			<p className="block sm:hidden text-rose-500 font-light text-sm">
				You are viewing the video on a really small screen! If possible,
				I&apos;d suggest to switch to landscape mode for a better view.
			</p>
		</div>
	);
};

export default ProjectVideo;
