"use client";

import { Skill } from "@/types";

interface SkillElementProps {
	skill: Skill;
}

const SkillElement = ({ skill }: SkillElementProps) => {
	return (
		<div>
			<img className="h-[40px] pointer-events-none" src={skill.icon} />
		</div>
	);
};

export default SkillElement;
