"use client";

import Link from "next/link";

import SKILLS_LEARNING from "@/constants/learning";
import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";

import Subtitle from "../../subtitle";
import SkillElement from "./skillelement";
import SkillList from "./skilllist";

const Skills = () => {
	const { language } = useTranslationStore();

	return (
		<div
			id="skills"
			className="items-center justify-center w-full flex flex-col gap-12"
		>
			<Subtitle text={TRANSLATION[language].index.skills.title} />
			<div className="flex flex-col gap-12">
				<h2 className="font-bold text-3xl">
					{TRANSLATION[language].index.skills.headers.skills}
				</h2>
				<SkillList />
				<p className="font-bold text-xl">
					{TRANSLATION[language].index.skills.headers.learning}
				</p>
				<SkillList skills={SKILLS_LEARNING} />
			</div>
			<Link
				href="https://shields.io/"
				target="_blank"
				className="font-light text-sm w-fit hover:underline text-muted-foreground"
			>
				<em>{TRANSLATION[language].index.skills.imgCredits}</em>
			</Link>
		</div>
	);
};

export default Skills;
