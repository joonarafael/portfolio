"use client";

import Container from "@/components/container";
import AboutMe from "@/components/home/aboutme/aboutme";
import Experience from "@/components/home/experience/experience";
import NewProject from "@/components/home/newproject/newproject";
import Skills from "@/components/home/skills/skills";
import Title from "@/components/home/title/title";
import Work from "@/components/home/work/work";

const HomePage = () => {
	return (
		<Container>
			<div className="flex flex-col gap-24 z-0">
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