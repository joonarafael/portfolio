"use client";

import Subtitle from "../../subtitle";

const Work = () => {
	return (
		<div
			id="work"
			className="items-center justify-center w-full flex flex-col gap-12"
		>
			<Subtitle text="WORK" />
			<div className="flex flex-col gap-8">
				<h2 className="font-bold text-3xl">{`Things I've built so far`}</h2>
			</div>
		</div>
	);
};

export default Work;
