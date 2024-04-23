"use client";

import Subtitle from '../../subtitle';
import ProfPic from './profpic';

const AboutMe = () => {
	return (
		<div
			id="aboutMe"
			className="items-center justify-center w-full flex flex-col gap-12"
		>
			<Subtitle text="ABOUT ME" />
			<div className="flex flex-row gap-12 justify-between w-full items-center">
				<div className="hidden lg:flex min-w-[256px] min-h-[256px]">
					<ProfPic />
				</div>
				<div className="text-left flex flex-col gap-3">
					<h2 className="font-bold text-3xl">
						Creative problem-solver and a worker of the future with a passion
						for web development
					</h2>
					<p>
						Over the past twelve months, I have immersed myself in web
						development, building full-stack applications with React in
						TypeScript for Next.js servers. Additionally, I have proactively
						acquainted myself with Jest and GitLab Actions for CI/CD. Currently,
						I am looking into more advanced deployment strategies, including
						proxies and caching & rate limiting, Docker containers and other
						cloud services.
					</p>
					<p>
						Front-End has been more interesting to me. Interacting with
						customers, and understanding how they actually see your product, is
						rewarding. I love to be part of the team to throw the spaghetti on
						the wall and see what sticks.
					</p>
					<p>
						{`However, no service is completed without a back-end. I have also
						spent my fair share of time learning about the server-side of
						things; building user authentication protocols, RESTful APIs, and
						dealing with databases. I've also gained the theoretical foundations
						from university; understanding Turing-completeness and N vs NP, etc.
						You know the deal.`}
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
