"use client";

import EXPERIENCES from "@/constants/experiences";
import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";

import Subtitle from "../../subtitle";
import ExperienceElement from "./experienceelement";

const Experience = () => {
	const { language } = useTranslationStore();

	return (
		<div
			id="experience"
			className="items-center justify-center w-full flex flex-col gap-12"
		>
			<Subtitle text={TRANSLATION[language].index.experience.title} />
			<div className="flex flex-col gap-8 w-full max-w-[1080px]">
				<h2 className="font-bold text-3xl">
					{TRANSLATION[language].index.experience.header}
				</h2>
				<div className="flex w-full flex-col gap-8">
					{EXPERIENCES.map((experience, i) => (
						<div key={i}>
							<ExperienceElement
								experience={experience}
								initialExpand={i == 0}
							/>
						</div>
					))}{" "}
				</div>
			</div>
		</div>
	);
};

export default Experience;
