"use client";

import { useState } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import SKILLS from "@/constants/skills";
import useScreenSize from "@/hooks/useScreenSize";
import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";

import SkillElement from "./skillelement";

const SkillList = () => {
	const { language } = useTranslationStore();

	const [expand, setExpand] = useState(false);

	const screenSize = useScreenSize();
	const breakpoint = 1024;

	SKILLS.sort((a, b) => {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	});

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{screenSize.width > breakpoint ? (
				<>
					{SKILLS.map((skill, i) => (
						<div key={i} className="relative group">
							<div className="absolute opacity-0 -inset-0.5 bg-gradient-to-r from-purple-800 to-pink-500 rounded-xl blur-md group-hover:opacity-75 transition group-hover:duration-200 duration-1000"></div>
							<div className="relative bg-black rounded-xl items-center justify-center flex h-14">
								<SkillElement skill={skill} />
							</div>
						</div>
					))}
				</>
			) : (
				<>
					{expand ? (
						<>
							{SKILLS.map((skill, i) => (
								<div key={i} className="relative group">
									<div className="absolute opacity-0 -inset-0.5 bg-gradient-to-r from-purple-800 to-pink-500 rounded-xl blur-md group-hover:opacity-75 transition group-hover:duration-200 duration-1000"></div>
									<div className="relative bg-black rounded-xl items-center justify-center flex h-14">
										<SkillElement skill={skill} />
									</div>
								</div>
							))}
							<Button
								onClick={() => {
									setExpand(false);
								}}
								size="xl"
								className="bg-black font-bold items-center gap-2 text-white dark:hover:text-black"
							>
								<FiMinusCircle className="h-4 w-4" />
								<p>{TRANSLATION[language].index.skills.listBtn.showLess}</p>
							</Button>
						</>
					) : (
						<>
							{SKILLS.slice(0, 5).map((skill, i) => (
								<div key={i} className="relative group">
									<div className="absolute opacity-0 -inset-0.5 bg-gradient-to-r from-purple-800 to-pink-500 rounded-xl blur-md group-hover:opacity-75 transition group-hover:duration-200 duration-1000"></div>
									<div className="relative bg-black rounded-xl items-center justify-center flex h-14">
										<SkillElement skill={skill} />
									</div>
								</div>
							))}
							<Button
								onClick={() => {
									setExpand(true);
								}}
								size="xl"
								className="bg-black font-bold items-center gap-2 text-white dark:hover:text-black"
							>
								<FiPlusCircle className="h-4 w-4" />
								<p>{TRANSLATION[language].index.skills.listBtn.showMore}</p>
							</Button>
						</>
					)}
				</>
			)}
		</div>
	);
};

export default SkillList;
