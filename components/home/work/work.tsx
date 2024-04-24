"use client";

import { Button } from "@/components/ui/button";
import WORK from "@/lib/work";

import Subtitle from "../../subtitle";
import WorkPanel from "../../workpanel";

const Work = () => {
	const firstFour = WORK.slice(0, 4);

	return (
		<div
			id="work"
			className="items-center justify-center w-full flex flex-col gap-12"
		>
			<Subtitle text="WORK" />
			<div className="flex flex-col gap-12 w-full items-center justify-center">
				<h2 className="font-bold text-3xl">{`Things I've built so far`}</h2>
				<div className="gap-8 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{firstFour.map((work, i) => (
						<WorkPanel key={i} work={work} />
					))}
				</div>
				<Button
					variant="ghost"
					onClick={() => {
						window.open("/projects", "_self");
					}}
					className="gradient-text w-fit text-transparent animate-gradient text-2xl"
				>
					and more...
				</Button>
			</div>
		</div>
	);
};

export default Work;
