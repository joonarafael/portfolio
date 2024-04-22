"use client";

import Subtitle from "../../subtitle";

const Experience = () => {
	return (
		<div
			id="experience"
			className="items-center justify-center w-full flex flex-col gap-12"
		>
			<Subtitle text="EXPERIENCE" />
			<div className="flex flex-col gap-8">
				<h2 className="font-bold text-3xl">{`Quick summary of my most recent experiences`}</h2>
			</div>
		</div>
	);
};

export default Experience;
