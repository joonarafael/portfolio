"use client";

import { useState } from "react";

import Container from "@/components/container";
import AboutMe from "@/components/home/aboutme/aboutme";
import Experience from "@/components/home/experience/experience";
import NewProject from "@/components/home/newproject/newproject";
import Skills from "@/components/home/skills/skills";
import Title from "@/components/home/title/title";
import Work from "@/components/home/work/work";
import { Button } from "@/components/ui/button";

const HomePage = () => {
	const [showNote, setShowNote] = useState(true);

	return (
		<Container>
			<div className="flex flex-col gap-24 z-0">
				{showNote && (
					<div className="flex flex-col items-center justify-center gap-4 border border-rose-500 rounded-xl p-4 bg-rose-200">
						<h1 className="text-lg font-bold text-rose-500">
							Hey there! Please note that this site is still under construction.
						</h1>
						<p className="text-rose-500">
							Some information may be outdated, inaccurate, or missing. Pages
							and/or content might be missing. Some functionality may not work
							correctly.
						</p>
						<Button
							onClick={() => {
								setShowNote(false);
							}}
							variant="destructive"
							className="w-fit"
						>
							Got it
						</Button>
					</div>
				)}
				<Title />
				<AboutMe />
				<Skills />
				<Work />
				<Experience />
				<NewProject />
			</div>
		</Container>
	);
};

export default HomePage;
