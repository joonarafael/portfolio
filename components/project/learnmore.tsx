"use client";

import { RxGithubLogo } from "react-icons/rx";
import { VscGlobe } from "react-icons/vsc";

import { Button } from "@/components/ui/button";
import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";
import { Project } from "@/types";

import ContactButton from "../navbar/contact";

interface ProjectLearnMoreProps {
	project: Project;
}

const ProjectLearnMore = ({ project }: ProjectLearnMoreProps) => {
	const { language } = useTranslationStore();

	return (
		<div className="flex flex-col lg:flex-row justify-between min-h-48 items-center gradient-background animate-gradientBackground rounded-xl py-16 lg:py-0 lg:px-16 w-full backdrop-blur-lg gap-4">
			<div className="text-white text-center lg:text-left">
				{project.id === "explotrack" ? (
					<>
						<h3 className="text-base sm:text-xl font-normal sm:font-bold">
							{TRANSLATION[language].project.learnMore.private.header}
						</h3>
						<p className="hidden sm:block">
							{TRANSLATION[language].project.learnMore.private.subtitle}
						</p>
					</>
				) : (
					<>
						<h3 className="text-base sm:text-xl font-normal sm:font-bold">
							{TRANSLATION[language].project.learnMore.public.header}
						</h3>
						<p className="hidden sm:block">
							{TRANSLATION[language].project.learnMore.public.subtitle}
						</p>
					</>
				)}
			</div>
			<div>
				{project.id === "explotrack" ? (
					<ContactButton
						btnTxt={TRANSLATION[language].project.learnMore.private.btnText}
					/>
				) : (
					<a
						href={`https://github.com/joonarafael/${project.id}`}
						target="_blank"
					>
						<Button className="items-center gap-2 text-md w-full text-black bg-white hover:bg-white/80">
							<RxGithubLogo className="w-5 h-5" />
							<p>{TRANSLATION[language].project.learnMore.public.btnText}</p>
						</Button>
					</a>
				)}
			</div>
		</div>
	);
};

export default ProjectLearnMore;
