"use client";

import { Skill } from "@/types";

interface SkillElementProps {
	skill: Skill;
}

const SkillElement = ({ skill }: SkillElementProps) => {
	return (
		<div className="relative group">
			<div className="relative rounded-xl items-center justify-center flex">
				<div className="cursor-crosshair">
					<img
						className="hover:animate-tada rounded-lg"
						src={skill.icon}
						alt={skill.name}
					/>
				</div>
			</div>
		</div>
	);
};

{
	/* <div className="absolute opacity-0 -inset-0.5 bg-gradient-to-r from-purple-800 to-pink-500 rounded-xl blur-md group-hover:opacity-75 transition group-hover:duration-200 duration-1000"></div> */
}

export default SkillElement;
