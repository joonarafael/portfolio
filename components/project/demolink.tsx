/* eslint-disable @next/next/no-img-element */
"use client";

import { VscGlobe } from "react-icons/vsc";

import { Button } from "@/components/ui/button";
import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";
import { Project } from "@/types";

interface DemoLinkProps {
	project: Project;
}

const DemoLink = ({ project }: DemoLinkProps) => {
	const { language } = useTranslationStore();

	return (
		<a
			href={project.href ?? ""}
			target="_blank"
			className="cursor-pointer group flex flex-col items-center justify-center gap-2 border p-2 rounded-xl bg-background h-min border-black dark:border-purple-500 w-full xl:w-min"
		>
			{project.id === "explotrack" && language === "en" && (
				<p className="font-light">NOTE: The project is in Finnish.</p>
			)}
			<img
				className="object-contain brightness-75 duration-500 group-hover:brightness-100 group-hover:duration-200 pointer-events-none max-h-[240px] rounded-xl hidden xl:block"
				src={project.thumbnail ?? ""}
				alt="Thumbnail"
			/>
			<Button className="items-center gap-1 text-md w-full">
				<VscGlobe className="w-5 h-5" />
				<p>
					{project.id === "explotrack"
						? TRANSLATION[language].project.demoLink.explotrack
						: TRANSLATION[language].project.demoLink.btnText}
				</p>
			</Button>
			<span className="flex flex-row gap-1 text-sm">
				<p className="font-light text-neutral-500">
					{TRANSLATION[language].project.demoLink.deployedOn}
				</p>
				<p>{project?.deployedOn}</p>
			</span>
		</a>
	);
};

export default DemoLink;
