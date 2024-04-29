/* eslint-disable @next/next/no-img-element */
"use client";

import { IoVideocamOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import { Project } from "@/types";

interface VideoNotWorkingProps {
	project: Project;
}

const VideoNotWorking = ({ project }: VideoNotWorkingProps) => {
	return (
		<div className="flex flex-col gap-2 w-full border rounded-xl p-2 bg-background">
			<p className="text-foreground/50 font-light text-sm">
				Video not showing? Not working?
			</p>
			<a href={project.media} target="_blank">
				<Button
					variant="secondary"
					className="items-center gap-2 text-md w-full"
				>
					<IoVideocamOutline className="w-5 h-5" />
					<p>Open the video source file</p>
				</Button>
			</a>
		</div>
	);
};

export default VideoNotWorking;
