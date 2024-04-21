"use client";

import Container from "@/components/container";
import AboutMe from "@/components/home/aboutme";
import Experience from "@/components/home/experience";
import NewProject from "@/components/home/newproject";
import Skills from "@/components/home/skills";
import Title from "@/components/home/title";
import Work from "@/components/home/work";

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
