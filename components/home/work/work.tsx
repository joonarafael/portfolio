"use client";

import { Button } from "@/components/ui/button";

import Subtitle from "../../subtitle";
import WorkPanel from "./workpanel";

const Work = () => {
	return (
		<div
			id="work"
			className="items-center justify-center w-full flex flex-col gap-12"
		>
			<Subtitle text="WORK" />
			<div className="flex flex-col gap-8 w-full items-center justify-center">
				<h2 className="font-bold text-3xl">{`Things I've built so far`}</h2>
				<div className="gap-8 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					<WorkPanel
						image=""
						title="Explotrack"
						description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
					/>
					<WorkPanel
						image=""
						title="Spotisaver"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					/>
					<WorkPanel
						image=""
						title="Visual Pathfinder"
						description="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
					/>
					<WorkPanel
						image=""
						title="Tiirascraper"
						description="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
					/>
				</div>
				<Button
					variant="link"
					onClick={() => {
						window.open(
							"https://github.com/joonarafael?tab=repositories",
							"_blank"
						);
					}}
					className="text-xl w-min"
				>
					and more...
				</Button>
			</div>
		</div>
	);
};

export default Work;
