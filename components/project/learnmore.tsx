"use client";

import { RxGithubLogo } from "react-icons/rx";
import { TbForbid2 } from "react-icons/tb";

import { Button } from "@/components/ui/button";
import { Project } from "@/types";

interface ProjectLearnMoreProps {
	project: Project;
}

const ProjectLearnMore = ({ project }: ProjectLearnMoreProps) => {
	return (
		<div className="flex flex-col lg:flex-row justify-between min-h-50 items-center gradient-background animate-gradientBackground rounded-xl p-16 w-full backdrop-blur-lg gap-4">
			<div className="text-white text-center lg:text-left">
				<h3 className="text-base sm:text-xl font-normal sm:font-bold">
					Want to learn more about this project?
				</h3>
				<p className="hidden sm:block">
					Check the source code and read the full project documentation on
					GitHub!
				</p>
			</div>
			<div>
				{project.id === "explotrack" ? (
					<Button disabled className="items-center gap-2 text-md w-full">
						<TbForbid2 className="w-5 h-5" />
						<p>GitHub repo is private</p>
					</Button>
				) : (
					<Button
						onClick={() => {
							window.open(
								`https://github.com/joonarafael/${project.id}`,
								"_blank"
							);
						}}
						className="items-center gap-2 text-md w-full text-black bg-white hover:text-black/75 hover:bg-white/75"
					>
						<RxGithubLogo className="w-5 h-5" />
						<p>Check the GitHub repo</p>
					</Button>
				)}
			</div>
		</div>
	);
};

export default ProjectLearnMore;
