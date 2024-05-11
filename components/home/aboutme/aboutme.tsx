"use client";

import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";

import Subtitle from "../../subtitle";
import ProfPic from "./profpic";

const AboutMe = () => {
	const { language } = useTranslationStore();

	return (
		<div
			id="aboutMe"
			className="items-center justify-center w-full flex flex-col gap-12"
		>
			<Subtitle text={TRANSLATION[language].index.aboutme.title} />
			<div className="flex flex-row gap-12 justify-between w-full items-center">
				<div className="hidden lg:flex min-w-[256px] min-h-[256px]">
					<ProfPic />
				</div>
				<div className="text-left flex flex-col gap-3">
					<h2 className="font-bold text-3xl">
						{TRANSLATION[language].index.aboutme.subtitle}
					</h2>
					<p>
						Over the past year, I&apos;ve delved deep into web development,
						crafting full-stack applications with React in TypeScript for
						Next.js servers. I&apos;ve also familiarized myself with GitLab
						Actions and other CI/CD solutions, with an ongoing exploration of
						advanced deployment strategies like proxies, caching, and Docker
						containers.
					</p>
					<p>
						While I find front-end development particularly captivating, I
						understand the importance of a robust back-end. I&apos;ve dedicated
						time to building user authentication protocols, RESTful APIs, and
						database management. My academic background in computer science has
						provided me with insights into computational theory, including
						topics like automata, N vs NP, and computability, along with a
						strong foundation in mathematics, including linear algebra,
						calculus, and matrix algebra.
					</p>
					<p>
						As a second-year computer science student, I&apos;m continuously
						expanding my skills and knowledge, eager to contribute to innovative
						projects and collaborate with diverse teams. I&apos;m committed to
						my journey in web development and excited about the opportunities
						ahead.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
