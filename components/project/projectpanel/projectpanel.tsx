"use client";

import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";
import { Project } from "@/types";

import FlagShip from "../flagship";

interface ProjectPanelProps {
	project: Project;
}

const ProjectPanel = ({ project }: ProjectPanelProps) => {
	const { language } = useTranslationStore();

	return (
		<a href={`/projects/${project.id}`}>
			<div
				className={`group hover:cursor-pointer transition hover:duration-100 duration-300 hover:scale-[1.03] shadow-light dark:shadow-neon w-full h-96 flex flex-col rounded-xl bg-secondary ${
					project.id === "explotrack" && "border-2 border-foreground/75"
				}`}
			>
				<div className="relative flex h-2/3 sm:h-1/2 bg-primary text-rose-500 rounded-t-xl items-center justify-center">
					<div className="absolute z-40 rounded-xl w-full h-full shadow-[0_0_80px_rgba(0,0,0,0.3)_inset] left-0 top-0"></div>
					<div className="absolute z-0">LOADING VIDEO...</div>
					<video
						autoPlay
						loop
						playsInline
						muted
						className="relative z-30 w-full h-full object-cover rounded-t-xl pointer-events-none"
						src={project.media}
					/>
				</div>
				<div className="flex flex-col text-left gap-2 h-1/3 sm:h-1/2 rounded-b-xl p-2 sm:p-4">
					<div className="flex w-full justify-between flex-row sm:justify-start sm:flex-col gap-2">
						<h3 className="text-xl sm:text-2xl font-bold group-hover:underline">
							{project.title}
						</h3>
						{project.id === "explotrack" && (
							<FlagShip
								text={TRANSLATION[language].global.projectPanel.flagShip}
							/>
						)}
					</div>
					<p className="text-neutral-500 font-light text-sm sm:text-base">
						{project.about}
					</p>
				</div>
			</div>
		</a>
	);
};

export default ProjectPanel;
