"use client";

import Subtitle from "../../subtitle";
import ProfPic from "./profpic";

const AboutMe = () => {
	return (
		<div
			id="aboutMe"
			className="items-center justify-center w-full flex flex-col gap-4"
		>
			<Subtitle text="ABOUT ME" />
			<div className="flex flex-row gap-2 justify-between w-full items-center">
				<div className="hidden lg:flex min-w-[256px] min-h-[256px]">
					<ProfPic />
				</div>
				<div className="text-left">
					<h2 className="font-bold text-3xl">
						Nam ante sem, tristique eleifend pellentesque eu, placerat
						sollicitudin lorem.
					</h2>
					<p>
						I am a second-year Computer Science student at the University of
						Helsinki, eager to take the next step in my career. I learn quickly
						and have completed numerous programming projects as hobbies during
						my free time. Over the past six months, I have immersed myself in
						web development, building full-stack applications with React in
						TypeScript for Next.js servers. Additionally, I have proactively
						acquainted myself with Jest and GitLab Actions for CI/CD.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
