"use client";

import { RxGithubLogo } from "react-icons/rx";
import { VscGlobe } from "react-icons/vsc";

import { Button } from "@/components/ui/button";
import { Project } from "@/types";

interface ProjectLearnMoreProps {
	project: Project;
}

const ProjectLearnMore = ({ project }: ProjectLearnMoreProps) => {
	return (
		<div className="flex flex-col lg:flex-row justify-between min-h-50 items-center gradient-background animate-gradientBackground rounded-xl p-16 w-full backdrop-blur-lg gap-4">
			<div className="text-white text-center lg:text-left">
				{project.id === "explotrack" ? (
					<>
						<h3 className="text-base sm:text-xl font-normal sm:font-bold">
							Unfortunately the source code is private.
						</h3>
						<p className="hidden sm:block">
							You may still check the <strong>clone</strong> up and running on
							the web!
						</p>
					</>
				) : (
					<>
						<h3 className="text-base sm:text-xl font-normal sm:font-bold">
							Want to learn more about this project?
						</h3>
						<p className="hidden sm:block">
							Check the source code and read the full project documentation on
							GitHub!
						</p>
					</>
				)}
			</div>
			<div>
				{project.id === "explotrack" ? (
					<a href={`https://www.google.com`} target="_blank">
						<Button className="items-center gap-1 text-md w-full text-black bg-white hover:text-black/75 hover:bg-white/75">
							<VscGlobe className="w-5 h-5" />
							<p>
								{project.id === "explotrack"
									? "Check the demo project on web"
									: "Check the live project on web"}
							</p>
						</Button>
					</a>
				) : (
					<a
						href={`https://github.com/joonarafael/${project.id}`}
						target="_blank"
					>
						<Button className="items-center gap-2 text-md w-full text-black bg-white hover:text-black/75 hover:bg-white/75">
							<RxGithubLogo className="w-5 h-5" />
							<p>Check the GitHub repo</p>
						</Button>
					</a>
				)}
			</div>
		</div>
	);
};

export default ProjectLearnMore;
