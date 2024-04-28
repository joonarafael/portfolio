"use client";

import EXPERIENCES from "@/constants/experiences";

import Subtitle from "../../subtitle";
import ExperienceElement from "./experienceelement";

const Experience = () => {
	return (
		<div
			id="experience"
			className="items-center justify-center w-full flex flex-col gap-12"
		>
			<Subtitle text="EXPERIENCE" />
			<div className="flex flex-col gap-8 w-full max-w-[1080px]">
				<h2 className="font-bold text-3xl">{`Quick summary of my most recent experiences`}</h2>
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
