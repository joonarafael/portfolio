"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import useScreenSize from "@/hooks/useScreenSize";
import SKILLS from "@/lib/skills";

import SkillElement from "./skillelement";

const SkillList = () => {
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
								className="bg-black font-bold items-center gap-2"
							>
								<CircleMinus className="h-4 w-4" />
								<p>SHOW LESS</p>
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
								className="bg-black font-bold items-center gap-2"
							>
								<CirclePlus className="h-4 w-4" />
								<p>SHOW MORE</p>
							</Button>
						</>
					)}
				</>
			)}
		</div>
	);
};

export default SkillList;
