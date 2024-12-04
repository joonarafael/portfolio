"use client";

import SKILLS from "@/constants/skills";

import SkillElement from "./skillelement";

const SkillList = () => {
	SKILLS.sort((a, b) => {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	});

	return (
		<div className="flex flex-wrap items-center justify-center w-full gap-1">
			{SKILLS.map((skill, i) => (
				<SkillElement key={i} skill={skill} />
			))}
		</div>
	);
};

export default SkillList;
